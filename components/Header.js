function Header({ onBookTask = () => {} }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [showBookingModal, setShowBookingModal] = React.useState(false);
    
    const navItems = [
      { label: 'Home', href: 'index.html' },
      { label: 'About', href: 'about.html' },
      { label: 'Services', href: 'services.html' },
      { label: 'Features', href: 'features.html' },
      { label: 'FAQ', href: 'faq.html' },
      { label: 'Pricing', href: 'pricing.html' },
      { label: 'GoosePro', href: 'goosepro.html' }
    ];

    return (
      <header className="fixed top-0 left-0 right-0 bg-[var(--background)]/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <img src="https://app.trickle.so/storage/public/images/anonymous/bbed88bc-9edb-4974-a571-e2c3488e8d36.png" alt="TaskGoose Logo" className="h-10" />
              <span className="text-xl font-bold text-[var(--accent-color)] whitespace-nowrap">TaskGoose</span>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
              {navItems.map((item, idx) => (
                <a key={idx} href={item.href} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-medium whitespace-nowrap">
                  {item.label}
                </a>
              ))}
              <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-center whitespace-nowrap">Request a Task</a>
              <a href="https://tally.so/r/J9dA24" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-white whitespace-nowrap" style={{backgroundColor: 'var(--secondary-color)'}}>
                Sign Up
              </a>
              <a href="shop-local.html" className="px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl bg-orange-500 text-white hover:bg-orange-600 whitespace-nowrap">
                Shop Local
              </a>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden flex-shrink-0">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl text-[var(--accent-color)]`}></div>
            </button>
          </div>

            {isMenuOpen && (
              <nav className="lg:hidden mt-4 pb-4 space-y-4">
                {navItems.map((item, idx) => (
                  <a key={idx} href={item.href} className="block text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-medium">
                    {item.label}
                  </a>
                ))}
                <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="btn-primary w-full inline-block text-center">Request a Task</a>
                <a href="https://tally.so/r/J9dA24" target="_blank" rel="noopener noreferrer" className="block w-full px-8 py-4 rounded-full font-medium text-center text-white" style={{backgroundColor: 'var(--secondary-color)'}}>
                  Sign Up
                </a>
                <a href="shop-local.html" className="block w-full px-8 py-4 rounded-full font-medium text-center bg-orange-500 text-white hover:bg-orange-600">
                  Shop Local
                </a>
              </nav>
            )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}