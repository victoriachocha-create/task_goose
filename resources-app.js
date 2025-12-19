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

function ResourcesPage() {
  try {
    useScrollAnimation();
    const goosistantRef = React.useRef(null);
    
    const [showUserGuide, setShowUserGuide] = React.useState(false);
    const [bookingModalOpen, setBookingModalOpen] = React.useState(false);

    const resources = [
      {
        id: 'user-guide',
        icon: 'book-open',
        title: 'User Guide',
        description: 'Step-by-step tutorials on booking, payments, and managing your tasks.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
        action: () => setShowUserGuide(true)
      },
      {
        id: 'goosepro',
        icon: 'briefcase',
        title: 'GoosePro Resources',
        description: 'Learn how to register, verify, and grow as a GoosePro in your category.',
        image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&q=80',
        link: 'goosepro.html'
      },
      {
        id: 'safety',
        icon: 'shield-check',
        title: 'Safety & Verification Policy',
        description: 'Your safety is our priority. Learn how we protect you through verified professionals and ethical tech.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
        link: 'legal.html'
      }
    ];

    const tutorialSteps = [
      { number: 1, text: 'Visit the website: www.mytaskgoose.com', icon: 'globe' },
      { number: 2, text: 'Click on your task', icon: 'mouse-pointer-click' },
      { number: 3, text: 'Choose your preferred service option', icon: 'list' },
      { number: 4, text: 'Fill in the necessary details', icon: 'file-text' },
      { number: 5, text: 'Book the task', icon: 'calendar-check' },
      { number: 6, text: 'Get matched with a GoosePro', icon: 'users' },
      { number: 7, text: 'Task done!!', icon: 'check-circle' }
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Goosistant ref={goosistantRef} />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp">Resources & Support</h1>
            <p className="text-2xl text-[var(--text-secondary)]" data-animate="animate-fadeInUp">
              Everything you need to understand how TaskGoose works — and why it works for you.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {resources.map((resource, idx) => (
              <div key={idx} data-animate="animate-fadeInUp" style={{animationDelay: `${idx * 0.1}s`}} className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group cursor-pointer border border-gray-200 dark:border-gray-700" style={{backgroundColor: 'var(--card-background)'}}>
                <div className="relative overflow-hidden h-48">
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: 'var(--primary-color)'}}>
                      <div className={`icon-${resource.icon} text-xl text-white`}></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary-color)] transition-colors">{resource.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{resource.description}</p>
                  {resource.link ? (
                    <a href={resource.link} className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                      Learn More
                      <div className="icon-arrow-right text-lg ml-2"></div>
                    </a>
                  ) : (
                    <button onClick={resource.action} className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                      View Guide
                      <div className="icon-arrow-right text-lg ml-2"></div>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {showUserGuide && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowUserGuide(false)}>
            <div className="rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}} onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">How to Book a Task</h2>
                  <button onClick={() => setShowUserGuide(false)} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <div className="icon-x text-2xl"></div>
                  </button>
                </div>

                <div className="space-y-6 mb-8">
                  {tutorialSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{backgroundColor: 'var(--primary-color)', color: 'white'}}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className={`icon-${step.icon} text-xl`} style={{color: 'var(--primary-color)'}}></div>
                          <p className="text-lg font-medium">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                    Get Started Today
                    <div className="icon-arrow-right text-xl ml-2"></div>
                  </a>
                  <p className="text-lg mt-6 font-light" style={{color: 'var(--primary-color)'}}>Task smarter, live better.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
        <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} category="" />
      </div>
    );
  } catch (error) {
    console.error('ResourcesPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ResourcesPage /></ErrorBoundary>);
