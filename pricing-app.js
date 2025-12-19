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

function PricingPage() {
  try {
    useScrollAnimation();
    const goosistantRef = React.useRef(null);
    
    const [bookingModalOpen, setBookingModalOpen] = React.useState(false);

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Goosistant ref={goosistantRef} />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp">Flexible Pricing for Every Task</h1>
            <p className="text-2xl text-[var(--text-secondary)]" data-animate="animate-fadeInUp">
              Because no two tasks are the same — pay only for what you need, when you need it.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl p-12 mb-16 shadow-2xl border border-gray-200 dark:border-gray-700 text-center transition-colors duration-300" style={{background: 'linear-gradient(135deg, rgba(168, 230, 207, 0.2), rgba(135, 206, 235, 0.2))'}}>
              <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                <div className="icon-briefcase text-4xl text-white"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Looking for Corporate Solutions?</h2>
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl mx-auto">
                Organizations and businesses have unique needs. We offer tailored Smart Solutions for Modern Workplaces including employee assistance programs, facility management, and executive concierge services.
              </p>
              <a href="corporate.html" className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                <div className="icon-building text-xl mr-3"></div>
                Explore Corporate Solutions
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" alt="Flexible Pricing" className="w-full h-96 object-cover rounded-3xl shadow-2xl hover-lift" />
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6">Your Tasks, Your Price</h2>
                <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
                  At TaskGoose, we know every task is different. Pricing depends on urgency, complexity, and your unique needs.
                </p>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  We'll give you a personalized quote that's fair, transparent, and designed to save your time and stress.
                </p>
                <div className="inline-block px-6 py-3 rounded-full mb-6" style={{backgroundColor: 'var(--primary-color)', opacity: 0.2}}>
                  <p className="text-2xl font-bold" style={{color: 'var(--accent-color)', opacity: 1}}>Most tasks start from ₦5,000</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-700 text-center" style={{background: 'linear-gradient(to bottom right, var(--card-background), var(--hover-bg))'}}>
              <p className="text-sm text-[var(--text-secondary)] italic mb-8">
                *Final cost may vary based on task complexity, location, and urgency. Express bookings attract a small priority fee.
              </p>
              <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-12 py-5 rounded-full font-semibold text-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                <div className="icon-file-text text-2xl mr-3"></div>
                Get a Custom Quote
              </a>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                <strong>90% of users</strong> say TaskGoose gave them more peace of mind in their daily life.
              </p>
            </div>
          </div>
        </section>

        <Footer />
        <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} category="" />
      </div>
    );
  } catch (error) {
    console.error('PricingPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><PricingPage /></ErrorBoundary>);