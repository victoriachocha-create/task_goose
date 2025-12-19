function ShopLocal() {
  try {
    useScrollAnimation();
    
    const features = [
      { icon: 'apple', text: 'Fresh farm produce' },
      { icon: 'shopping-basket', text: 'Lifestyle and home products' },
      { icon: 'package', text: 'Groceries & artisanal goods' }
    ];

    return (
      <div data-name="shop-local" data-file="components/ShopLocal.js">
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(245, 166, 35, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp">Shop Local with GooseMarket</h1>
            <p className="text-xl text-[var(--text-secondary)]" data-animate="animate-fadeInUp">Your trusted e-Marketplace for authentic local products</p>
          </div>
        </section>

        <section className="section-padding transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.05), var(--background))'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative" data-animate="animate-slideInLeft">
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-[var(--accent-color)] px-4 py-2 rounded-full font-semibold text-sm z-10">
                Coming Soon
              </div>
              <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80" alt="Local Market" className="rounded-3xl shadow-2xl" />
            </div>
            
            <div className="space-y-6" data-animate="animate-slideInRight">
              <div className="flex items-center gap-3">
                <div className="icon-shopping-cart text-4xl" style={{color: 'var(--primary-color)'}}></div>
                <h2 className="text-4xl font-bold">Shop Local with GooseMarket</h2>
              </div>
              
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                Discover authentic products from verified local vendors on TaskGoose's e-Marketplace — <strong>GooseMarket</strong>.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)]">
                Soon, you'll be able to browse and shop from trusted Goosepreneurs offering:
              </p>
              
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: 'var(--primary-color)'}}>
                      <div className={`icon-${feature.icon} text-xl text-white`}></div>
                    </div>
                    <span className="text-lg font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 space-y-4">
                <button disabled className="px-8 py-4 rounded-full font-medium text-lg bg-gray-300 text-gray-500 cursor-not-allowed flex items-center gap-2">
                  <div className="icon-shopping-bag text-xl"></div>
                  Explore Marketplace — Coming Soon
                </button>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-gray-200">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <div className="icon-store text-xl" style={{color: 'var(--primary-color)'}}></div>
                    For Goosepreneurs
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Become a vendor and reach new customers on GooseMarket.
                  </p>
                  <a href="https://tally.so/r/WO2a2P" target="_blank" rel="noopener noreferrer" className="block px-6 py-2 rounded-full font-medium text-sm text-center whitespace-nowrap hover:shadow-lg transition-all" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                    Join Goosepreneur Waitlist
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-[var(--text-secondary)] italic pt-4">
                "Bringing your local marketplace online — the Goose way."
              </p>
            </div>
          </div>
        </div>
        </section>

        <section className="section-padding transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-12">
              Be the first to know when GooseMarket launches. Sign up as a shopper or vendor today!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className="icon-shopping-bag text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Goose Shopper</h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Shop authentic local products from verified vendors
                </p>
                <a href="https://tally.so/r/1AX0gb" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-3 rounded-full font-medium text-center hover:shadow-lg transition-all" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                  Join GooseShopper Waitlist
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 bg-orange-500">
                  <div className="icon-store text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Goosepreneur</h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Sell your products and grow your business online
                </p>
                <a href="https://tally.so/r/WO2a2P" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-3 rounded-full font-medium text-center bg-orange-500 text-white hover:bg-orange-600 transition-all">
                  Join Goosepreneur Waitlist
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('ShopLocal component error:', error);
    return null;
  }
}
