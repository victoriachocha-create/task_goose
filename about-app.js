function StorySection() {
  try {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--primary-color)]/5 to-white rounded-3xl p-8 md:p-12 shadow-lg">
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
    const values = [
      { title: 'Trust', icon: 'shield-check', description: 'Building confidence through verified professionals and secure transactions' },
      { title: 'Innovation', icon: 'lightbulb', description: 'Leveraging AI to revolutionize how tasks get done' },
      { title: 'Empathy', icon: 'heart', description: 'Understanding and caring about our users\' needs' },
      { title: 'Simplicity', icon: 'zap', description: 'Making complex processes effortlessly simple' },
      { title: 'Empowerment', icon: 'trending-up', description: 'Creating opportunities for individuals and businesses to thrive' }
    ];

    return (
      <div className="min-h-screen bg-white" data-name="about-page" data-file="about-app.js">
        <Header />
        
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white">
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
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative">
                <img src="https://app.trickle.so/storage/public/images/anonymous/a6bb8033-691a-4b27-8c85-204c3e86d7c7.png" alt="TaskGoose Team" className="rounded-2xl shadow-xl" />
                <div className="absolute -top-4 -right-4">
                  <AnimatedGoose />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Mission</h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  To empower individuals and businesses to live and work smarter through trusted, AI-driven task coordination.
                </p>
                <h2 className="text-3xl font-bold mb-6">Vision</h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  To build the world's most intelligent lifestyle and productivity ecosystem, connecting people with opportunities across Nigeria, West Africa, and beyond.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-[var(--text-secondary)]">The principles that guide everything we do</p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${value.icon} text-2xl text-[var(--accent-color)]`}></div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-[var(--primary-color)]/5 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Registered Company</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-4">
              <strong>TaskGoose Tech Solutions Ltd.</strong>
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              Headquartered in Lagos, Nigeria<br />
              Expanding across West Africa and beyond
            </p>
          </div>
        </section>

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
