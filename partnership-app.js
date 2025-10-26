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

function PartnershipPage() {
  try {
    const [formData, setFormData] = React.useState({
      organizationName: '',
      contactPerson: '',
      position: '',
      email: '',
      phone: '',
      partnershipType: '',
      description: '',
      website: '',
      socialLinks: '',
      preferredDate: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);

    const categories = [
      { icon: 'briefcase', title: 'Corporate & Institutional Alliances', desc: 'Partner with established corporations and institutions' },
      { icon: 'truck', title: 'Logistics & Last-Mile Collaborations', desc: 'Integrate delivery and logistics solutions' },
      { icon: 'cpu', title: 'Technology & Integration Partners', desc: 'Build technical integrations and platforms' },
      { icon: 'shopping-bag', title: 'Retail & Lifestyle Co-branding', desc: 'Create co-branded lifestyle experiences' },
      { icon: 'heart', title: 'Social Impact & CSR Programs', desc: 'Drive community empowerment initiatives' }
    ];

    const benefits = [
      'Access a growing user base of professionals and households',
      'Integrate into a trusted task fulfillment network',
      'Co-develop impactful products and pilot programs',
      'Build measurable value through technology and service delivery',
      'Contribute to job creation and community empowerment'
    ];

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        await trickleCreateObject('partnership', {
          OrganizationName: formData.organizationName,
          ContactPerson: formData.contactPerson,
          Position: formData.position,
          Email: formData.email,
          Phone: formData.phone,
          PartnershipType: formData.partnershipType,
          Description: formData.description,
          Website: formData.website,
          SocialLinks: formData.socialLinks,
          PreferredMeetingDate: formData.preferredDate,
          Status: 'Pending Review'
        });
        
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setFormData({ organizationName: '', contactPerson: '', position: '', email: '', phone: '', partnershipType: '', description: '', website: '', socialLinks: '', preferredDate: '' });
        }, 5000);
      } catch (error) {
        console.error('Error submitting partnership:', error);
        alert('Failed to submit. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Partner with TaskGoose</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              At TaskGoose, we believe collaboration powers impact. We partner with forward-thinking brands, institutions, and innovators to transform how individuals and businesses manage their daily operations.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${cat.icon} text-2xl text-[var(--accent-color)]`}></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cat.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[var(--primary-color)]/5 to-white rounded-3xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Partner with Us</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="icon-check-circle text-xl mr-3 mt-1" style={{color: 'var(--primary-color)'}}></div>
                    <span className="text-lg text-[var(--text-secondary)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            {showSuccess ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className="icon-check text-4xl text-[var(--accent-color)]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank you for your interest!</h3>
                <p className="text-lg text-[var(--text-secondary)]">
                  Our partnerships team will review your proposal and reach out within 5–7 working days to discuss possible collaboration pathways.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Submit a Partnership Proposal</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Organization Name *" value={formData.organizationName} onChange={(e) => setFormData({...formData, organizationName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Contact Person *" value={formData.contactPerson} onChange={(e) => setFormData({...formData, contactPerson: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                    <input type="text" placeholder="Position *" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                    <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" />
                  </div>
                  <select value={formData.partnershipType} onChange={(e) => setFormData({...formData, partnershipType: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required>
                    <option value="">Type of Partnership *</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Tech">Tech</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="NGO/CSR">NGO/CSR</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea placeholder="Brief Description of Proposed Collaboration *" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required></textarea>
                  <input type="url" placeholder="Website" value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" />
                  <input type="text" placeholder="Social Links" value={formData.socialLinks} onChange={(e) => setFormData({...formData, socialLinks: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" />
                  <input type="date" placeholder="Preferred Meeting Date" value={formData.preferredDate} onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" />
                  <button type="submit" disabled={isSubmitting} className="w-full px-6 py-4 rounded-full font-medium text-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                    {isSubmitting ? 'Submitting...' : '👉 Submit Partnership Proposal'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('PartnershipPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><PartnershipPage /></ErrorBoundary>);