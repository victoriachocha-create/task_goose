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
    const serviceCategories = [
      {
        title: 'Household Management',
        icon: 'home',
        services: ['Deep Cleaning', 'Laundry & Ironing', 'Home Organization', 'Meal Preparation', 'Yard Maintenance', 'Handyman & Repairs']
      },
      {
        title: 'Errand Services',
        icon: 'shopping-bag',
        services: ['Grocery & Delivery', 'Pet Care', 'House Sitting', 'Package Pickup', 'Travel & Event Assistance', 'Dry Cleaning']
      },
      {
        title: 'Caregiving Services',
        icon: 'heart',
        services: ['Elderly Care', 'Childcare', 'Special Needs Support', 'Disability Care', 'Companionship', 'Medical Assistance']
      },
      {
        title: 'Custom Tasks',
        icon: 'sparkles',
        services: ['Flexible Task Creation', 'Personalized Combinations', 'AI Recommendations', 'Repeat Task Scheduling', 'Priority Booking', 'Custom Solutions']
      }
    ];

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-[var(--text-secondary)]">Comprehensive solutions for every need</p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className={`icon-${category.icon} text-2xl text-[var(--accent-color)]`}></div>
                  </div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.services.map((service, sidx) => (
                    <div key={sidx} className="bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <div className="icon-check text-lg mr-2" style={{color: 'var(--primary-color)'}}></div>
                        <span className="font-medium">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ServicesPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ServicesPage /></ErrorBoundary>);