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
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    };

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-[var(--text-secondary)]">We're here to help with any questions</p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
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

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                <textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required></textarea>
                <button type="submit" className="w-full px-6 py-3 rounded-full font-medium" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                  Send Message
                </button>
              </form>
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