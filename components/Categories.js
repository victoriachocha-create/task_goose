function Categories({ onBookTask }) {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const categories = [
      { 
        name: 'HomeCare', 
        icon: 'home', 
        color: '#A8E6CF',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/4a61d4c5-529f-4956-b342-74ed11a63dee.jpeg',
        tagline: 'Your home, our priority.',
        description: 'From sparkling spaces to serene interiors — our pros handle everything that keeps your home spotless, styled, and stress-free.',
        services: ['Cleaning & Housekeeping', 'Home Management', 'House Sitting', 'Meal Prep', 'Interior Decorators', 'Gardening']
      },
      { 
        name: 'Fix-It', 
        icon: 'wrench', 
        color: '#FFB84D',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/83f783a5-9d54-4d04-a40f-99eba2e1ace0.jpeg',
        tagline: 'Repairs made easy.',
        description: 'Reliable handymen, electricians, and plumbers ready to fix, paint, or maintain your space — no stress, no delay.',
        services: ['Handymen', 'Electricians', 'Plumbers', 'Painters', 'Repairs & Maintenance', 'Yard Maintainers']
      },
      { 
        name: 'Beauty & Lifestyle', 
        icon: 'sparkles', 
        color: '#FF69B4',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/2cb8b31d-bec0-4ce0-83d0-ea63b5eb8aa7.jpeg',
        tagline: 'Where beauty meets convenience.',
        description: 'From premium hair vendors to skilled stylists, our experts bring beauty services closer to your doorstep.',
        services: ['Hair Vendors', 'Hair Stylists/Salons', 'Makeup Artists', 'Nail Technicians', 'Spa Services']
      },
      { 
        name: 'FamilyCare', 
        icon: 'heart', 
        color: '#FFB6C1',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/5d8e879b-f67c-4667-bf41-7112ecf60adb.jpeg',
        tagline: 'Care that comforts.',
        description: 'Professional support for your loved ones — from hospital bed watch to special needs care.',
        services: ['Elderly Care', 'Hospital Bed Watch', 'Special Needs Support'],
        disclaimer: 'For now, we do not encourage Special needs support to children.'
      },
      { 
        name: 'MoveEase', 
        icon: 'truck', 
        color: '#87CEEB',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/0c5501bc-60fd-46f6-972c-92ae0d8d5aa1.jpeg',
        tagline: 'Move without the mess.',
        description: 'Simplify relocation with trusted movers for homes and offices. We make every transition smooth and organized.',
        services: ['Home Relocation', 'Office Relocation', 'Packing & Unpacking', 'Furniture Assembly', 'Move-In/Out Cleaning']
      },
      { 
        name: 'GooseLife Errands', 
        icon: 'shopping-bag', 
        color: '#DDA0DD',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/07a96526-4ed4-4f1a-b542-0713c7e1285e.jpeg',
        tagline: 'Your errands, our mission.',
        description: 'From travel coordination to event planning — we handle your to-do list while you live fully.',
        services: ['Grocery Shopping & Delivery', 'Errands', 'Medicine Pickup', 'Event Planning', 'Travel Coordination', 'Dry Cleaning']
      },
      { 
        name: 'GoosePaw', 
        icon: 'dog', 
        color: '#98D8C8',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/64b49a50-06f6-4da2-98ff-1f448d003499.jpeg',
        tagline: 'For the love of furry friends.',
        description: 'Caring, trusted hands for your pets — from walking and sitting to full grooming services.',
        services: ['Pet Sitting', 'Pet Walking', 'Pet Grooming']
      },
      { 
        name: 'SafeNest', 
        icon: 'shield-check', 
        color: '#6B5B95',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        tagline: 'Safety made smarter.',
        description: 'Protect your home with expert smart-tech installations, surveillance systems, and secure monitoring.',
        services: ['Smart Home Installation', 'Surveillance Setup', 'Security System Maintenance', 'Safety Management']
      }
    ];

    return (
      <>
        <section className="py-20 overflow-hidden transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
          <div className="max-w-7xl mx-auto px-6 mb-10">
            <h2 className="text-4xl font-bold text-center mb-4">Featured Service Categories</h2>
            <p className="text-center text-[var(--text-secondary)] text-lg">Discover the smarter way to live, work, and get things done.</p>
          </div>
          <div className="relative">
            <div className="flex gap-6 animate-scroll" style={{width: 'max-content'}}>
              {[...categories, ...categories].map((cat, idx) => (
                <a key={idx} href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-gray-200 dark:border-gray-700 group cursor-pointer" style={{backgroundColor: 'var(--background)'}}>
                  <div className="service-category-image mask-bottom-right relative overflow-hidden h-64">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <p className="text-base font-semibold mb-2">{cat.tagline}</p>
                      <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white text-[var(--accent-color)] hover:bg-[var(--primary-color)] transition-all">
                        Request Now
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-center mb-2 group-hover:text-[var(--primary-color)] transition-colors duration-300">{cat.name}</h3>
                    <p className="text-center text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">{cat.tagline}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 45s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            @keyframes float-gentle {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            .group:hover {
              animation: float-gentle 1.5s ease-in-out infinite;
            }
          `}</style>
        </section>
        <CategoryModal isOpen={!!selectedCategory} onClose={() => setSelectedCategory(null)} category={selectedCategory} />
      </>
    );
  } catch (error) {
    console.error('Categories component error:', error);
    return null;
  }
}