function ShopLocal() {
  try {
    const [goosepreneurEmail, setGoosepreneurEmail] = React.useState('');
    const [shopperEmail, setShopperEmail] = React.useState('');
    const [isSubmittingVendor, setIsSubmittingVendor] = React.useState(false);
    const [isSubmittingShopper, setIsSubmittingShopper] = React.useState(false);
    const [showVendorSuccess, setShowVendorSuccess] = React.useState(false);
    const [showShopperSuccess, setShowShopperSuccess] = React.useState(false);

    const features = [
      { icon: 'apple', text: 'Fresh farm produce' },
      { icon: 'shopping-basket', text: 'Lifestyle and home products' },
      { icon: 'package', text: 'Groceries & artisanal goods' }
    ];

    const handleVendorWaitlist = async (e) => {
      e.preventDefault();
      setIsSubmittingVendor(true);
      try {
        await trickleCreateObject('goosemarket_waitlist', {
          Email: goosepreneurEmail,
          Role: 'Goosepreneur',
          JoinedAt: new Date().toISOString()
        });
        setShowVendorSuccess(true);
        setGoosepreneurEmail('');
        setTimeout(() => setShowVendorSuccess(false), 3000);
      } catch (error) {
        console.error('Error joining waitlist:', error);
        alert('Failed to join waitlist. Please try again.');
      } finally {
        setIsSubmittingVendor(false);
      }
    };

    const handleShopperWaitlist = async (e) => {
      e.preventDefault();
      setIsSubmittingShopper(true);
      try {
        await trickleCreateObject('goosemarket_waitlist', {
          Email: shopperEmail,
          Role: 'Goose Shopper',
          JoinedAt: new Date().toISOString()
        });
        setShowShopperSuccess(true);
        setShopperEmail('');
        setTimeout(() => setShowShopperSuccess(false), 3000);
      } catch (error) {
        console.error('Error joining waitlist:', error);
        alert('Failed to join waitlist. Please try again.');
      } finally {
        setIsSubmittingShopper(false);
      }
    };

    return (
      <div data-name="shop-local" data-file="components/ShopLocal.js">
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Shop Local with GooseMarket</h1>
            <p className="text-xl text-[var(--text-secondary)]">Your trusted e-Marketplace for authentic local products</p>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-[var(--primary-color)]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-[var(--accent-color)] px-4 py-2 rounded-full font-semibold text-sm z-10">
                Coming Soon
              </div>
              <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80" alt="Local Market" className="rounded-3xl shadow-2xl" />
            </div>
            
            <div className="space-y-6">
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
                  {showVendorSuccess ? (
                    <div className="text-center py-2">
                      <p className="text-green-600 font-medium">✓ You're on the waitlist!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleVendorWaitlist} className="flex gap-2">
                      <input type="email" placeholder="Your Email" value={goosepreneurEmail} onChange={(e) => setGoosepreneurEmail(e.target.value)} className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[var(--primary-color)] text-sm" required />
                      <button type="submit" disabled={isSubmittingVendor} className="px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                        {isSubmittingVendor ? 'Joining...' : 'Join Waitlist'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-[var(--text-secondary)] italic pt-4">
                "Bringing your local marketplace online — the Goose way."
              </p>
            </div>
          </div>
        </div>
        </section>

        <section className="section-padding bg-white">
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
                {showShopperSuccess ? (
                  <div className="text-center py-4">
                    <p className="text-green-600 font-medium text-lg">✓ You're on the waitlist!</p>
                  </div>
                ) : (
                  <form onSubmit={handleShopperWaitlist} className="space-y-3">
                    <input type="email" placeholder="Enter your email" value={shopperEmail} onChange={(e) => setShopperEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                    <button type="submit" disabled={isSubmittingShopper} className="w-full px-6 py-3 rounded-full font-medium" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                      {isSubmittingShopper ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </form>
                )}
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 bg-orange-500">
                  <div className="icon-store text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Goosepreneur</h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Sell your products and grow your business online
                </p>
                {showVendorSuccess ? (
                  <div className="text-center py-4">
                    <p className="text-green-600 font-medium text-lg">✓ You're on the waitlist!</p>
                  </div>
                ) : (
                  <form onSubmit={handleVendorWaitlist} className="space-y-3">
                    <input type="email" placeholder="Enter your email" value={goosepreneurEmail} onChange={(e) => setGoosepreneurEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                    <button type="submit" disabled={isSubmittingVendor} className="w-full px-6 py-3 rounded-full font-medium bg-orange-500 text-white hover:bg-orange-600">
                      {isSubmittingVendor ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </form>
                )}
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
