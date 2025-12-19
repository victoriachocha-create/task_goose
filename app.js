class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [bookingModalOpen, setBookingModalOpen] = React.useState(false);
    const [signupModalOpen, setSignupModalOpen] = React.useState(false);
    const [categoryBubblesOpen, setCategoryBubblesOpen] = React.useState(false);
    const [userGuideOpen, setUserGuideOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [selectedRole, setSelectedRole] = React.useState('');
    const goosistantRef = React.useRef(null);

    const openBookingModal = (category = '') => {
      setSelectedCategory(category);
      setBookingModalOpen(true);
    };

    const openSignupModal = (role = '') => {
      setSelectedRole(role);
      setSignupModalOpen(true);
    };

    const handleCategorySelect = (category) => {
      openBookingModal(category);
    };

    return (
      <div className="min-h-screen bg-[var(--background)] transition-colors duration-300" data-name="app" data-file="app.js">
        <DarkModeToggle />
        <Goosistant ref={goosistantRef} />
        <ReferralBanner />
        <Header onBookTask={() => openBookingModal()} />
        <Hero 
          onBookTask={() => openBookingModal()} 
          onJoinGoosePro={() => openSignupModal('GoosePro')}
          onOpenGoosistant={() => goosistantRef.current?.handleOpen()}
        />
        <SignupCTA />
        <SuccessMetrics />
        <Categories onBookTask={(category) => openBookingModal(category)} />
        <UserGroups />
        <HowItWorks onOpenGoosistant={() => goosistantRef.current?.handleOpen()} />
        <AIFeatures />
        <TrustedBy />
        <Testimonials />
        <Newsletter />
        <Footer onOpenUserGuide={() => setUserGuideOpen(true)} />
        <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} category={selectedCategory} />
        <SignupModal isOpen={signupModalOpen} onClose={() => setSignupModalOpen(false)} defaultRole={selectedRole} />
        <CategoryBubblesModal isOpen={categoryBubblesOpen} onClose={() => setCategoryBubblesOpen(false)} onCategorySelect={handleCategorySelect} />
        <UserGuideModal isOpen={userGuideOpen} onClose={() => setUserGuideOpen(false)} onBookNow={() => openBookingModal()} />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);