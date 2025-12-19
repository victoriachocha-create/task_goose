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

function ContactPage() {
  try {
    useScrollAnimation();
    
    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp">Get In Touch</h1>
            <p className="text-xl text-[var(--text-secondary)]" data-animate="animate-fadeInUp">We're here to help with any questions</p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div data-animate="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className="icon-mail text-xl text-[var(--accent-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-[var(--text-secondary)]">info@mytaskgoose.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className="icon-phone text-xl text-[var(--accent-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-[var(--text-secondary)]">+234 813 352 2599</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className="icon-map-pin text-xl text-[var(--accent-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-[var(--text-secondary)]">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-animate="animate-slideInRight" className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift text-center" style={{background: 'linear-gradient(to bottom right, var(--hover-bg), var(--card-background))'}}>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Have a question or need assistance? We're here to help. Click below to send us a message.
              </p>
              <a href="https://tally.so/r/rj5ZKv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                <div className="icon-send text-xl mr-3"></div>
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ContactPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ContactPage /></ErrorBoundary>);