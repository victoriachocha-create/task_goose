function StorySection() {
  try {
    useScrollAnimation();
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
      <section className="py-16 px-6 transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12 shadow-lg transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.05), var(--card-background))'}}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                In every city, there are two kinds of people: those overwhelmed by too many tasks, and those searching for opportunities to earn, grow, and belong. TaskGoose was born to bridge that gap — not just through technology, but through purpose.
              </p>
              
              {!isExpanded && (
                <button 
                  onClick={() => setIsExpanded(true)}
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all"
                  style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}
                >
                  Read Full Story
                  <div className="icon-chevron-down text-lg ml-2"></div>
                </button>
              )}

              {isExpanded && (
                <div className="space-y-6 animate-fadeIn">
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    It began with a simple realization: the world's greatest resource isn't data or machines — it's people. Yet, millions remain underutilized, underpaid, and unseen. We envisioned a future where anyone, anywhere, could transform their time and skills into income; where productivity wasn't about exhaustion, but balance; and where communities could rise — task by task — toward a smarter, calmer, and more connected world.
                  </p>
                  
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    TaskGoose is more than a platform. It's a <strong>movement of modern living</strong>, where <strong>AI meets empathy</strong>, and <strong>innovation meets impact</strong>. Through our network of trained GoosePros and Goosepreneurs, we empower individuals to earn sustainably, support local economies, and deliver everyday solutions that lighten the mental load of modern life.
                  </p>

                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    We believe true productivity begins with peace of mind. By simplifying life's routines, we help our users reclaim their time — to rest, create, build, and simply <em>be</em>.
                  </p>

                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    From Lagos to London, Nairobi to New York, our dream is global: To redefine how the world works — smarter, healthier, and together.
                  </p>

                  <p className="text-2xl font-semibold text-center mt-8" style={{color: 'var(--primary-color)'}}>
                    TaskGoose. Task Smarter, Zero Stress.
                  </p>

                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all mt-4"
                    style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}
                  >
                    Show Less
                    <div className="icon-chevron-up text-lg ml-2"></div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('StorySection component error:', error);
    return null;
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-full" style={{backgroundColor: 'var(--primary-color)'}}>
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AboutPage() {
  try {
    useScrollAnimation();
    const goosistantRef = React.useRef(null);
    
    const values = [
      { title: 'Trust', icon: 'shield-check', description: 'Building confidence through verified professionals and secure transactions' },
      { title: 'Innovation', icon: 'lightbulb', description: 'Leveraging AI to revolutionize how tasks get done' },
      { title: 'Empathy', icon: 'heart', description: 'Understanding and caring about our users\' needs' },
      { title: 'Empowerment', icon: 'trending-up', description: 'Creating opportunities for individuals and businesses to thrive' }
    ];

    const impactAreas = [
      { title: 'Job Creation', icon: 'briefcase', description: 'Empowering skilled individuals to find sustainable work' },
      { title: 'Community Growth', icon: 'users', description: 'Supporting local economies and underserved communities' },
      { title: 'Mental Well-being', icon: 'heart', description: 'Reducing stress and restoring balance to daily life' },
      { title: 'Women & Youth Empowerment', icon: 'sparkles', description: 'Giving voice and visibility to those often unseen' }
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}} data-name="about-page" data-file="about-app.js">
        <DarkModeToggle />
        <Goosistant ref={goosistantRef} />
        <Header />
        
        <section className="pt-32 pb-20 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              From a local idea to a global lifestyle-tech revolution
            </p>
          </div>
        </section>

        <StorySection />

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-20 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--card-background))'}}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden image-reveal">
                  <img src="https://app.trickle.so/storage/public/images/anonymous/a6bb8033-691a-4b27-8c85-204c3e86d7c7.png" alt="TaskGoose Team" className="w-full h-full object-cover" />
                  <div className="absolute top-6 right-6">
                    <AnimatedGoose onClick={() => goosistantRef.current?.handleOpen()} />
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center" data-animate="animate-slideInRight">
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-color)'}}>
                        <div className="icon-target text-2xl text-white"></div>
                      </div>
                      <h2 className="text-3xl font-bold">Mission</h2>
                    </div>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                      To empower individuals, families, and businesses to live and work smarter through technology that simplifies daily life while driving inclusive growth, sustainable employment, and mental well-being.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-color)'}}>
                        <div className="icon-eye text-2xl text-white"></div>
                      </div>
                      <h2 className="text-3xl font-bold">Vision</h2>
                    </div>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                      To build the world's most intelligent lifestyle and productivity ecosystem — one that connects people with opportunities, enhances well-being, and redefines modern living across Africa and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12 text-reveal">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">The principles that guide everything we do</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-stagger-container>
              {values.map((value, idx) => (
                <div key={idx} className="stagger-item rounded-2xl p-8 text-center card-hover border border-gray-200 dark:border-gray-700 group cursor-pointer" style={{background: 'linear-gradient(to bottom right, var(--hover-bg), var(--card-background))'}}>
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${value.icon} text-2xl text-white`}></div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-[var(--primary-color)] transition-colors">{value.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl p-8 md:p-12 mb-20 shadow-xl transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--card-background))'}}>
              <h2 className="text-4xl font-bold text-center mb-6 text-reveal">Our Impact</h2>
              <p className="text-2xl text-center mb-12 leading-relaxed font-light text-reveal" style={{color: 'var(--primary-color)'}}>
                Empowering People. Elevating Communities. Enhancing Life.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger-container>
                {impactAreas.map((area, idx) => (
                  <div key={idx} className="stagger-item rounded-2xl p-6 shadow-lg card-hover border border-gray-200 dark:border-gray-700 group cursor-pointer" style={{backgroundColor: 'var(--background)'}}>
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: 'var(--primary-color)'}}>
                      <div className={`icon-${area.icon} text-2xl text-white`}></div>
                    </div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-[var(--primary-color)] transition-colors">{area.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.05), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Join Us on This Journey</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12 leading-relaxed">
              Explore what's hatching next in the GooseLab or stay connected through our Gooseletter
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="gooselab.html" className="inline-flex items-center px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all hover-lift" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                <div className="text-2xl mr-2">🥚</div>
                Inside the GooseLab
              </a>
              <a href="https://tally.so/r/44QDGO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 rounded-full font-medium text-lg border-2 hover:shadow-lg transition-all hover-lift" style={{borderColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                <div className="icon-mail text-xl mr-2"></div>
                Subscribe to Gooseletter
              </a>
            </div>
          </div>
        </section>

        <div id="newsletter">
          <Newsletter />
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutPage component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <AboutPage />
  </ErrorBoundary>
);