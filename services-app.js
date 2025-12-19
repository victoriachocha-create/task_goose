class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
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

function ServicesPage() {
  try {
    useScrollAnimation();
    
    const [bookingModalOpen, setBookingModalOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [showBrochureModal, setShowBrochureModal] = React.useState(false);

    const serviceCategories = [
      {
        title: 'HomeCare',
        icon: 'home',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/4a61d4c5-529f-4956-b342-74ed11a63dee.jpeg',
        services: ['Cleaning & Housekeeping', 'Home Management', 'House Sitting', 'Meal Prep', 'Interior Decorators', 'Gardening']
      },
      {
        title: 'Fix-It',
        icon: 'wrench',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/83f783a5-9d54-4d04-a40f-99eba2e1ace0.jpeg',
        services: ['Handymen', 'Electricians', 'Plumbers', 'Painters', 'Repairs & Maintenance', 'Yard Maintainers']
      },
      {
        title: 'Beauty & Lifestyle',
        icon: 'sparkles',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/2cb8b31d-bec0-4ce0-83d0-ea63b5eb8aa7.jpeg',
        services: ['Hair Vendors', 'Hair Stylists/Salons', 'Makeup Artists', 'Nail Technicians', 'Spa Services']
      },
      {
        title: 'FamilyCare',
        icon: 'heart',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/5d8e879b-f67c-4667-bf41-7112ecf60adb.jpeg',
        services: ['Elderly Care', 'Hospital Bed Watch', 'Special Needs Support']
      },
      {
        title: 'MoveEase',
        icon: 'truck',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/0c5501bc-60fd-46f6-972c-92ae0d8d5aa1.jpeg',
        services: ['Home Relocation', 'Office Relocation', 'Packing & Unpacking', 'Furniture Assembly', 'Move-In/Out Cleaning']
      },
      {
        title: 'GooseLife Errands',
        icon: 'shopping-bag',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/07a96526-4ed4-4f1a-b542-0713c7e1285e.jpeg',
        services: ['Grocery Shopping & Delivery', 'Errands', 'Medicine Pickup', 'Event Planning', 'Travel Coordination', 'Dry Cleaning']
      },
      {
        title: 'GoosePaw',
        icon: 'dog',
        image: 'https://app.trickle.so/storage/public/images/usr_1704f32f60000001/64b49a50-06f6-4da2-98ff-1f448d003499.jpeg',
        services: ['Pet Sitting', 'Pet Walking', 'Pet Grooming']
      },
      {
        title: 'SafeNest',
        icon: 'shield-check',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        services: ['Smart Home Installation', 'Surveillance Setup', 'Security System Maintenance', 'Safety Management']
      }
    ];

    const handleServiceClick = (category) => {
      setSelectedCategory(category);
      setBookingModalOpen(true);
    };

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-animate="animate-fadeInUp">Our Services</h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8" data-animate="animate-fadeInUp">Comprehensive solutions for every need</p>
            <button onClick={() => setShowBrochureModal(true)} data-animate="animate-fadeInUp" className="inline-flex items-center px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all hover-lift" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
              <div className="icon-file-text text-xl mr-2"></div>
              📄 Download Our Brochure
            </button>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {serviceCategories.map((category, idx) => (
              <div key={idx} data-animate="animate-fadeInUp" style={{animationDelay: `${idx * 0.1}s`}} className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border group" style={{background: 'linear-gradient(to bottom right, var(--hover-bg), var(--card-background))', borderColor: 'var(--border-color)'}}>
                <div className="bg-gray-50 dark:bg-gray-800 overflow-hidden service-category-image relative">
                  <img src={category.image} alt={category.title} className="w-full h-64 sm:h-72 md:h-80 object-contain transition-transform duration-500 group-hover:scale-105" style={{clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 90%)'}} />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-color)'}}>
                      <div className={`icon-${category.icon} text-xl sm:text-2xl text-white`}></div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">{category.title}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {category.services.map((service, sidx) => (
                      <div key={sidx} onClick={() => handleServiceClick(category.title)} className="bg-white rounded-xl p-3 sm:p-4 shadow hover:shadow-md transition-all cursor-pointer hover-lift">
                        <div className="flex items-center">
                          <div className="icon-check text-base sm:text-lg mr-2" style={{color: 'var(--primary-color)'}}></div>
                          <span className="font-medium text-sm sm:text-base">{service}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg text-sm sm:text-base" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                      Request {category.title} Service
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
        
        <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} category={selectedCategory} />
        
        {showBrochureModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowBrochureModal(false)}>
            <div className="rounded-3xl max-w-lg w-full p-8 text-center transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}} onClick={(e) => e.stopPropagation()}>
              <div className="text-6xl mb-4">🥚</div>
              <h3 className="text-2xl font-bold mb-4">Our latest brochure is hatching soon!</h3>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Subscribe to the Gooseletter to be the first to get it.
              </p>
              <a href="https://tally.so/r/44QDGO" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-medium text-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                Subscribe to Gooseletter
              </a>
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('ServicesPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ServicesPage /></ErrorBoundary>);