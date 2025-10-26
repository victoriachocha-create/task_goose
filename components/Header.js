function Header({ onBookTask }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const navItems = [
      { label: 'Home', href: 'index.html' },
      { label: 'About', href: 'about.html' },
      { label: 'Services', href: 'services.html' },
      { label: 'FAQ', href: 'faq.html' },
      { label: 'Corporate', href: 'corporate.html' },
      { label: 'GoosePro', href: 'goosepro.html' },
      { label: 'Contact', href: 'contact.html' }
    ];

    return (
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="https://app.trickle.so/storage/public/images/anonymous/bbed88bc-9edb-4974-a571-e2c3488e8d36.png" alt="TaskGoose Logo" className="h-12" />
              <span className="text-2xl font-bold text-[var(--accent-color)]">TaskGoose</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <a key={idx} href={item.href} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-medium">
                  {item.label}
                </a>
              ))}
              <button onClick={onBookTask} className="btn-primary">Book a Task</button>
              <a href="shop-local.html" className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl bg-orange-500 text-white hover:bg-orange-600">
                Shop Local
              </a>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl text-[var(--accent-color)]`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              {navItems.map((item, idx) => (
                <a key={idx} href={item.href} className="block text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-medium">
                  {item.label}
                </a>
              ))}
              <button onClick={onBookTask} className="btn-primary w-full">Book a Task</button>
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