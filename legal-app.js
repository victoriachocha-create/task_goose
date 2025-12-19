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

function LegalPage() {
  try {
    const [activeSection, setActiveSection] = React.useState('guidelines');

    const sections = [
      { id: 'guidelines', title: 'Legal Guidelines', icon: 'file-text' },
      { id: 'privacy', title: 'Privacy Policy', icon: 'shield-check' },
      { id: 'terms', title: 'Terms of Service', icon: 'file-badge' },
      { id: 'cookies', title: 'Cookie Policy', icon: 'cookie' }
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Legal Information</h1>
            <p className="text-xl text-[var(--text-secondary)]">Transparency and Trust</p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {sections.map(section => (
                <button key={section.id} onClick={() => setActiveSection(section.id)} className={`px-6 py-3 rounded-full font-medium transition-all ${activeSection === section.id ? 'bg-[var(--primary-color)] text-[var(--accent-color)]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  <div className={`icon-${section.icon} text-lg inline-block mr-2`}></div>
                  {section.title}
                </button>
              ))}
            </div>

            <div className="rounded-3xl p-8 md:p-12 shadow-lg max-w-5xl mx-auto transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}}>
              {activeSection === 'guidelines' && <LegalGuidelines />}
              {activeSection === 'privacy' && <PrivacyPolicy />}
              {activeSection === 'terms' && <TermsOfService />}
              {activeSection === 'cookies' && <CookiePolicy />}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('LegalPage error:', error);
    return null;
  }
}

function LegalGuidelines() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Legal Guidelines</h2>
      
      <h3 className="text-xl font-semibold mt-8 mb-4">Introduction</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        TaskGoose Technologies is committed to transparency, user safety, and legal compliance. These guidelines outline our commitment to operating ethically and within the bounds of Nigerian law and international best practices.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Compliance Framework</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        TaskGoose operates in compliance with the Nigeria Data Protection Regulation (NDPR) and is prepared to meet GDPR standards for international users. We adhere to all applicable Nigerian laws governing digital platforms, consumer protection, and data privacy.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Data Privacy</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Your personal information is handled with the utmost care. For full details on how we collect, use, and protect your data, please review our <a href="#privacy" className="text-[var(--primary-color)] underline">Privacy Policy</a>.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">User Responsibilities</h3>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Provide truthful and accurate profile information</li>
        <li>Use the platform ethically and responsibly</li>
        <li>Comply with all applicable laws and regulations</li>
        <li>Respect the rights and safety of other users</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Prohibited Activities</h3>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Harassment, bullying, or threatening behavior</li>
        <li>Fraud, impersonation, or misrepresentation</li>
        <li>Spam or unsolicited communications</li>
        <li>Illegal transactions or services</li>
        <li>Unauthorized use or sharing of user data</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Intellectual Property Rights</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        All content, trademarks, logos, and technology on TaskGoose are owned by TaskGoose Technologies. Unauthorized use, reproduction, or distribution is strictly prohibited.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Liability Disclaimer</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        TaskGoose acts as an intermediary platform connecting users with service providers. We are not responsible for the actions, quality of service, or conduct of GoosePros or users. All transactions and interactions are between the parties involved.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Dispute Resolution</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Disputes should first be resolved through our customer support. If unresolved, mediation or arbitration under Nigerian law will apply. Lagos State courts have exclusive jurisdiction for legal matters.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Contact Information</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        <strong>TaskGoose Technologies Limited</strong><br />
        Lagos, Nigeria<br />
        Email: info@mytaskgoose.com<br />
        Schedule a call: <a href="https://call.whatsapp.com/voice/NOIVGgc7ZX62ktX6QC33iT" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]">Join WhatsApp Call</a>
      </p>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
      <p className="text-sm text-gray-500 mb-6">Last Updated: November 2025</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Purpose</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        This Privacy Policy explains how TaskGoose Technologies collects, uses, stores, and protects your personal information when you use our platform.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h3>
      <p className="text-[var(--text-secondary)] font-semibold mb-2">Personal Data:</p>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Name, email address, phone number</li>
        <li>Location and service preferences</li>
        <li>Payment information (processed securely through third-party providers)</li>
        <li>Profile photos and verification documents</li>
      </ul>

      <p className="text-[var(--text-secondary)] font-semibold mb-2">Non-Personal Data:</p>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Device information and browser type</li>
        <li>Usage analytics and interaction data</li>
        <li>Cookies and tracking technologies</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">How We Use Your Data</h3>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Match users with appropriate service providers</li>
        <li>Process payments and transactions securely</li>
        <li>Improve platform functionality and user experience</li>
        <li>Send service updates and communications</li>
        <li>Prevent fraud and ensure platform security</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Data Sharing</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        We do not sell your personal information. We may share limited data with:
      </p>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Service providers (GoosePros) necessary to fulfill your requests</li>
        <li>Payment processors for transaction completion</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Data Security</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        We implement industry-standard security measures including encryption, secure servers, firewalls, and restricted access to protect your information.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Your Rights</h3>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Access your personal data</li>
        <li>Request corrections or updates</li>
        <li>Request data deletion</li>
        <li>Withdraw consent for data processing</li>
        <li>Object to certain data uses</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Cookies</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        We use cookies to enhance your experience. For more details, see our <a href="#cookies" className="text-[var(--primary-color)] underline">Cookie Policy</a>.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Children's Privacy</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        TaskGoose is intended for users 18 years and older. We do not knowingly collect information from minors.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        For privacy inquiries, contact us at:<br />
        <strong>TaskGoose Technologies Limited</strong><br />
        Lagos, Nigeria<br />
        Email: info@mytaskgoose.com<br />
        Schedule a call: <a href="https://call.whatsapp.com/voice/NOIVGgc7ZX62ktX6QC33iT" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]">Join WhatsApp Call</a>
      </p>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>
      <p className="text-sm text-gray-500 mb-6">Last Updated: November 2025</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Acceptance of Terms</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        By creating an account or using TaskGoose, you agree to these Terms of Service. If you do not agree, please discontinue use of the platform.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Eligibility</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        You must be at least 18 years old and legally capable of entering into binding contracts to use TaskGoose.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Account Security</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Platform Services</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        TaskGoose connects users (Goose Shoppers) with verified service providers (GoosePros) for various household and business services. We facilitate communication and payments but do not provide the services directly.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Payment Terms</h3>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Payments are processed securely through our platform</li>
        <li>Funds are held until service completion</li>
        <li>Refunds are subject to our cancellation policy</li>
        <li>TaskGoose charges a service fee for platform use</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Service Provider Independence</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        GoosePros are independent contractors, not employees of TaskGoose. TaskGoose is not responsible for their actions, quality of work, or conduct.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Cancellations & Refunds</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Cancellations must be made within the specified timeframe. Late cancellations may incur fees. Refunds are processed according to our refund policy on a case-by-case basis.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Prohibited Use</h3>
      <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2 mb-4">
        <li>Fraudulent activities or impersonation</li>
        <li>Harassment or abusive behavior</li>
        <li>Illegal services or transactions</li>
        <li>Circumventing platform payments</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        All content, logos, and technology are owned by TaskGoose Technologies Limited. Unauthorized use is prohibited.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        TaskGoose is not liable for damages arising from platform use, service provider actions, or third-party conduct. Use the platform at your own risk.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Termination</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        We reserve the right to suspend or terminate accounts that violate these terms or engage in prohibited activities.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Governing Law</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        These terms are governed by Nigerian law. Lagos State courts have exclusive jurisdiction for disputes.
      </p>
    </div>
  );
}

function CookiePolicy() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Cookie Policy</h2>
      <p className="text-sm text-gray-500 mb-6">Last Updated: November 2025</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">What Are Cookies?</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Cookies are small text files stored on your device when you visit our website. They help us improve your experience and understand how you use our platform.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Types of Cookies We Use</h3>
      
      <p className="text-[var(--text-secondary)] font-semibold mb-2">1. Essential Cookies</p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Required for basic platform functionality, including login, security, and navigation.
      </p>

      <p className="text-[var(--text-secondary)] font-semibold mb-2">2. Performance Cookies</p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Help us understand how visitors interact with our platform by collecting anonymous usage data.
      </p>

      <p className="text-[var(--text-secondary)] font-semibold mb-2">3. Analytics Cookies</p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Used to analyze user behavior and improve platform features (e.g., Google Analytics).
      </p>

      <p className="text-[var(--text-secondary)] font-semibold mb-2">4. Advertising Cookies</p>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Used to deliver relevant ads and measure campaign effectiveness.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Managing Cookies</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        You can control cookies through your browser settings. Note that disabling certain cookies may affect platform functionality.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Third-Party Cookies</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        We use third-party services like Google Analytics and payment processors that may set their own cookies. Refer to their privacy policies for more information.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Data Retention</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        Cookie data is retained according to the type of cookie and its purpose, typically ranging from session-based to up to 2 years.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Policy Updates</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        We may update this Cookie Policy periodically. Check this page for the latest information.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">More Information</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        For more details on how we handle your data, please review our <a href="#privacy" className="text-[var(--primary-color)] underline">Privacy Policy</a>.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><LegalPage /></ErrorBoundary>);
