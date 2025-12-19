class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-full" style={{backgroundColor: 'var(--primary-color)'}}>Reload</button>
      </div>;
    }
    return this.props.children;
  }
}

function CareersPage() {
  try {
    useScrollAnimation();
    const goosistantRef = React.useRef(null);
    
    const roles = [
      {
        icon: 'code',
        title: 'Tech & Product',
        description: 'Help build the future of the TaskGoose platform. Work with our CTO on features, prototypes, user flows, backend logic, and everything that makes TaskGoose smarter and faster.',
        ideal: ['Aspiring developers', 'UI/UX designers', 'Product thinkers', 'No-code builders'],
        color: '#A8E6CF'
      },
      {
        icon: 'palette',
        title: 'Creative & Brand Design',
        description: 'Shape what the world sees when they think "TaskGoose." Work on graphics, social media creatives, layouts, branding elements, and storytelling that makes our platform unforgettable.',
        ideal: ['Designers', 'Content creators', 'Visual storytellers'],
        color: '#FFB84D'
      },
      {
        icon: 'megaphone',
        title: 'Marketing & Growth',
        description: 'Help us spread the word. From social media to campaigns to community engagement — you\'ll support awareness, traction, and brand visibility as we expand.',
        ideal: ['Aspiring marketers', 'Social media managers', 'PR & communications enthusiasts'],
        color: '#87CEEB'
      },
      {
        icon: 'settings',
        title: 'Operations & Support',
        description: 'Keep our engine running smoothly. Support onboarding, customer experience, admin coordination, and the everyday tasks that make TaskGoose reliable.',
        ideal: ['Operations lovers', 'Admin & coordination talents', 'Customer experience people'],
        color: '#DDA0DD'
      },
      {
        icon: 'store',
        title: 'GoosePreneur Support',
        description: 'Work with our network of Goosepreneurs — individuals and vendors selling products to our users. Help with onboarding, quality assurance, product checks, and vendor coordination.',
        ideal: ['People who enjoy organization', 'Vendor relations', 'Marketplace coordination'],
        color: '#FFB6C1'
      },
      {
        icon: 'users',
        title: 'Smart Tasker Coordination',
        description: 'Support the onboarding, screening, scheduling, and supervision of Smart Taskers — freelancers and businesses offering services on TaskGoose.',
        ideal: ['HR/people-oriented talents', 'Community managers', 'Service coordination lovers'],
        color: '#98D8C8'
      },
      {
        icon: 'lightbulb',
        title: 'Innovation & Strategy',
        description: 'Help research ideas, test concepts, explore user insights, and assist in shaping future features. Perfect for curious thinkers and problem-solvers.',
        ideal: ['Research lovers', 'Business strategy thinkers', 'Creative innovators'],
        color: '#F5A623'
      }
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Goosistant ref={goosistantRef} />
        <Header />
        
        <section className="pt-32 pb-20 px-6 relative overflow-hidden transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="flex justify-center items-center gap-4 mb-6">
              <AnimatedGoose onClick={() => goosistantRef.current?.handleOpen()} />
              <h1 className="text-5xl font-bold" data-animate="animate-fadeInUp">Join the Flight</h1>
              <AnimatedGoose onClick={() => goosistantRef.current?.handleOpen()} />
            </div>
            <p className="text-3xl font-bold mb-6" data-animate="animate-fadeInUp" style={{color: 'var(--primary-color)'}}>
              Be a Part of Something Extraordinary
            </p>
            <div className="max-w-3xl mx-auto space-y-4" data-animate="animate-fadeInUp">
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                We're creating TaskGoose, designed to simplify everyday life and empower people to get things done effortlessly. And we want brilliant, passionate people to be a part of this journey.
              </p>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                Whether you're a volunteer, intern, graduate trainee, or early contributor, this is your opportunity to grow your career inside a bold, fast-paced, innovative startup.
              </p>
              <p className="text-xl font-semibold" style={{color: 'var(--primary-color)'}}>
                If you're excited to learn, innovate, create, and make an impact, we want you on our team.
              </p>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Team collaboration" className="w-full h-64 object-cover rounded-3xl mt-12 shadow-2xl mx-auto max-w-5xl" data-animate="animate-fadeInUp" />
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4" data-animate="animate-fadeInUp">Roles & Opportunities at TaskGoose</h2>
            <p className="text-xl text-center text-[var(--text-secondary)] mb-16" data-animate="animate-fadeInUp">Find your place in our growing flight</p>
            
            <div className="grid md:grid-cols-2 gap-8" data-stagger-container>
              {roles.map((role, idx) => (
                <div key={idx} className="stagger-item rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-700" style={{backgroundColor: 'var(--background)'}}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: role.color}}>
                      <div className={`icon-${role.icon} text-2xl text-white`}></div>
                    </div>
                    <h3 className="text-2xl font-bold">{role.title}</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{role.description}</p>
                  <div>
                    <p className="font-semibold mb-3">Ideal for:</p>
                    <ul className="space-y-2">
                      {role.ideal.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <div className="icon-check text-lg mr-2" style={{color: role.color}}></div>
                          <span className="text-[var(--text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" alt="Team brainstorming" className="w-full h-80 object-cover rounded-3xl shadow-2xl mb-12" data-animate="animate-fadeInUp" />
            <div className="text-center" data-animate="animate-fadeInUp">
              <h2 className="text-4xl font-bold mb-6">See a Role That Excites You?</h2>
              <p className="text-2xl mb-8" style={{color: 'var(--primary-color)'}}>Join the flight!</p>
              <a href="https://tally.so/r/9qBlVV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-12 py-5 rounded-full font-semibold text-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                <div className="icon-send text-2xl mr-3"></div>
                Apply Now
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('CareersPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><CareersPage /></ErrorBoundary>);