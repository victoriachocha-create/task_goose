function SignupModal({ isOpen, onClose, defaultRole = '' }) {
  try {
    const [formData, setFormData] = React.useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      role: defaultRole,
      serviceInterest: []
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);

    const serviceOptions = ['HomeCare', 'FamilyCare', 'BizSupport', 'MoveEase', 'FixIt', 'GooseLife Concierge', 'Goose Shopper', 'Goosepreneur'];

    const handleServiceToggle = (service) => {
      setFormData(prev => ({
        ...prev,
        serviceInterest: prev.serviceInterest.includes(service)
          ? prev.serviceInterest.filter(s => s !== service)
          : [...prev.serviceInterest, service]
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        await trickleCreateObject('user', {
          FullName: formData.fullName,
          Email: formData.email,
          PhoneNumber: formData.phoneNumber,
          Role: formData.role,
          ServiceInterest: formData.serviceInterest.join(',')
        });
        
        setShowSuccess(true);
        setTimeout(() => {
          onClose();
          setShowSuccess(false);
          setFormData({ fullName: '', email: '', phoneNumber: '', role: '', serviceInterest: [] });
        }, 3000);
      } catch (error) {
        console.error('Error creating user:', error);
        alert('Failed to sign up. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Join TaskGoose</h2>
              <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
                <div className="icon-x text-2xl"></div>
              </button>
            </div>

            {showSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className="icon-check text-4xl text-[var(--accent-color)]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Welcome to TaskGoose!</h3>
                <p className="text-[var(--text-secondary)] text-lg">Your account has been created successfully. We'll be in touch soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Full Name *" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                <input type="tel" placeholder="Phone Number (optional)" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" />
                <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required>
                  <option value="">Select Role *</option>
                  <option value="Smart Tasker">Smart Tasker</option>
                  <option value="GoosePro">GoosePro</option>
                  <option value="Goosepreneur">Goosepreneur</option>
                  <option value="GooseShopper">GooseShopper</option>
                </select>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.map(service => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" checked={formData.serviceInterest.includes(service)} onChange={() => handleServiceToggle(service)} className="w-4 h-4" />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-4 rounded-full font-medium text-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SignupModal error:', error);
    return null;
  }
}