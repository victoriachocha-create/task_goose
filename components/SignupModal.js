function SignupModal({ isOpen, onClose, defaultRole = '' }) {
  try {
    const [formData, setFormData] = React.useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      location: '',
      accountType: '',
      serviceCategory: '',
      experienceLevel: '',
      idVerification: null,
      role: defaultRole,
      serviceInterest: []
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);

    const serviceOptions = ['HomeCare', 'Fix-It', 'Beauty & Lifestyle', 'FamilyCare', 'MoveEase', 'GooseLife Errands', 'GoosePaw', 'SafeNest', 'Cleaning & Housekeeping', 'Home Management', 'House Sitting', 'Meal Prep', 'Interior Decorators', 'Gardening', 'Handymen', 'Electricians', 'Plumbers', 'Painters', 'Repairs & Maintenance', 'Yard Maintainers', 'Hair Vendors', 'Hair Stylists/Salons', 'Makeup Artists', 'Nail Technicians', 'Spa Services', 'Elderly Care', 'Hospital Bed Watch', 'Special Needs Support', 'Home Relocation', 'Office Relocation', 'Packing & Unpacking', 'Furniture Assembly', 'Move-In/Out Cleaning', 'Grocery Shopping & Delivery', 'Errands', 'Medicine Pickup', 'Event Planning', 'Travel Coordination', 'Dry Cleaning', 'Pet Sitting', 'Pet Walking', 'Pet Grooming', 'Smart Home Installation', 'Surveillance Setup', 'Security System Maintenance', 'Safety Management', 'Other'];

    const handleServiceToggle = (service) => {
      setFormData(prev => ({
        ...prev,
        serviceInterest: prev.serviceInterest.includes(service)
          ? prev.serviceInterest.filter(s => s !== service)
          : [...prev.serviceInterest, service]
      }));
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFormData({...formData, idVerification: file});
      }
    };

    const sendToGoogleSheets = async (data) => {
      const formDataToSend = new FormData();
      formDataToSend.append('FullName', data.fullName);
      formDataToSend.append('Email', data.email);
      formDataToSend.append('PhoneNumber', data.phoneNumber);
      formDataToSend.append('Location', data.location);
      formDataToSend.append('AccountType', data.accountType);
      formDataToSend.append('ServiceCategory', data.serviceCategory);
      formDataToSend.append('ExperienceLevel', data.experienceLevel);
      formDataToSend.append('Role', data.role);
      
      const sheetUrl = 'https://script.google.com/macros/s/AKfycbxBd8TYHqFl4vKQVXMh9DsXqJ0oFZq5xPqLzQm6NeHXJw/exec';
      
      try {
        await fetch(sheetUrl, {
          method: 'POST',
          body: formDataToSend
        });
      } catch (error) {
        console.error('Error sending to Google Sheets:', error);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        await trickleCreateObject('user', {
          FullName: formData.fullName,
          Email: formData.email,
          PhoneNumber: formData.phoneNumber,
          Location: formData.location,
          AccountType: formData.accountType,
          ServiceCategory: formData.serviceCategory,
          ExperienceLevel: formData.experienceLevel,
          Role: formData.role,
          ServiceInterest: formData.serviceInterest.join(',')
        });
        
        await sendToGoogleSheets(formData);
        
        setShowSuccess(true);
        setTimeout(() => {
          onClose();
          setShowSuccess(false);
          setFormData({ fullName: '', email: '', phoneNumber: '', location: '', accountType: '', serviceCategory: '', experienceLevel: '', idVerification: null, role: '', serviceInterest: [] });
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
        <div className="rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}} onClick={(e) => e.stopPropagation()}>
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Join TaskGoose Professional Network</h2>
              <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
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
                <input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                <input type="tel" placeholder="Phone Number *" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                <input type="text" placeholder="Location/City *" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                <select value={formData.accountType} onChange={(e) => setFormData({...formData, accountType: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required>
                  <option value="">Account Type *</option>
                  <option value="Business Account">Register as Business Account</option>
                  <option value="Freelancer">Register as Freelancer</option>
                </select>
                <select value={formData.serviceCategory} onChange={(e) => setFormData({...formData, serviceCategory: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required>
                  <option value="">Service Category *</option>
                  {serviceOptions.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                <select value={formData.experienceLevel} onChange={(e) => setFormData({...formData, experienceLevel: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required>
                  <option value="">Experience Level *</option>
                  <option value="Beginner">Beginner (0-1 years)</option>
                  <option value="Intermediate">Intermediate (2-5 years)</option>
                  <option value="Expert">Expert (5+ years)</option>
                </select>
                <div>
                  <label className="block text-sm font-medium mb-2">ID Verification (Upload Document) *</label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG, PNG</p>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                  {isSubmitting ? 'Submitting...' : 'Join as GoosePro'}
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