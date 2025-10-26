function BookingModal({ isOpen, onClose, category = '' }) {
  try {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({
      fullName: '',
      email: '',
      taskDescription: '',
      category: category,
      specificService: '',
      preferredDate: '',
      preferredTime: '',
      taskLocation: '',
      budgetRange: '',
      taskSize: '',
      complexity: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);

    const serviceCategories = [
      { name: 'HomeCare', icon: 'home', services: ['Deep Cleaning', 'Laundry & Ironing', 'Home Organization', 'Meal Preparation', 'Yard Maintenance', 'Handyman & Repairs'] },
      { name: 'FixIt', icon: 'wrench', services: ['Plumbing', 'Electrical Repairs', 'Furniture Assembly', 'Appliance Fixes', 'Painting & Polishing', 'Carpentry'] },
      { name: 'FamilyCare', icon: 'heart', services: ['Elderly Care', 'Childcare', 'Special Needs Support', 'Disability Care', 'Hospital Bedside Watch', 'Medical Assistance'] },
      { name: 'MoveEase', icon: 'truck', services: ['Grocery & Delivery', 'Pet Care', 'House Sitting', 'Package Pickup', 'Travel & Event Assistance', 'Dry Cleaning'] },
      { name: 'BizSupport', icon: 'briefcase', services: ['Admin Support', 'Data Entry', 'Customer Service', 'Office Management'] },
      { name: 'GooseLife Concierge', icon: 'sparkles', services: ['Personal Shopping', 'Event Planning', 'Travel Coordination', 'Lifestyle Management'] }
    ];

    const selectedCategoryData = serviceCategories.find(cat => cat.name === formData.category);

    React.useEffect(() => {
      if (category) {
        setFormData(prev => ({ ...prev, category }));
        setStep(2);
      }
    }, [category]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        await trickleCreateObject('task', {
          TaskTitle: `${formData.category} - ${formData.specificService}`,
          TaskDescription: formData.taskDescription,
          Category: formData.category,
          SpecificService: formData.specificService,
          PreferredDate: formData.preferredDate,
          PreferredTime: formData.preferredTime,
          TaskLocation: formData.taskLocation,
          BudgetRange: formData.budgetRange,
          TaskSize: formData.taskSize,
          Complexity: formData.complexity,
          TaskStatus: 'Pending',
          CreatedByName: formData.fullName,
          CreatedByEmail: formData.email
        });
        
        setShowSuccess(true);
        setTimeout(() => {
          onClose();
          setShowSuccess(false);
          setStep(1);
          setFormData({ fullName: '', email: '', taskDescription: '', category: '', specificService: '', preferredDate: '', preferredTime: '', taskLocation: '', budgetRange: '', taskSize: '', complexity: '' });
        }, 4000);
      } catch (error) {
        console.error('Error submitting task:', error);
        alert('Failed to submit task. Please try again.');
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
              <h2 className="text-3xl font-bold">Book a Task</h2>
              <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
                <div className="icon-x text-2xl"></div>
              </button>
            </div>

            {showSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className="icon-check text-4xl text-[var(--accent-color)]"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">🎉 Your task has been logged!</h3>
                <p className="text-[var(--text-secondary)] text-lg mb-4">A GoosePro will review and send a quote shortly.</p>
                <p className="text-sm text-[var(--text-secondary)]">Every task is unique — pricing depends on size, duration, and complexity. Expect a quick quote soon. No hidden fees.</p>
              </div>
            ) : (
              <div>
                {step === 1 && (
                  <div>
                    <p className="text-xl mb-6">👋 Welcome, Smart Tasker! Which task would you like to book today?</p>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceCategories.map((cat, idx) => (
                        <button key={idx} onClick={() => { setFormData({...formData, category: cat.name}); setStep(2); }} className="p-6 rounded-2xl border-2 border-gray-200 hover:border-[var(--primary-color)] transition-all text-left">
                          <div className={`icon-${cat.icon} text-3xl mb-3`} style={{color: 'var(--primary-color)'}}></div>
                          <h3 className="font-semibold text-lg">{cat.name}</h3>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && selectedCategoryData && (
                  <div>
                    <button onClick={() => setStep(1)} className="mb-4 text-[var(--text-secondary)] hover:text-[var(--primary-color)] flex items-center">
                      <div className="icon-arrow-left text-lg mr-2"></div> Back
                    </button>
                    <p className="text-xl mb-6">Great! What kind of {formData.category} service?</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {selectedCategoryData.services.map((service, idx) => (
                        <button key={idx} onClick={() => { setFormData({...formData, specificService: service}); setStep(3); }} className="p-4 rounded-xl border-2 border-gray-200 hover:border-[var(--primary-color)] transition-all text-left">
                          <div className="icon-check-circle text-xl mb-2" style={{color: 'var(--primary-color)'}}></div>
                          <span className="font-medium">{service}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <button onClick={() => setStep(2)} className="mb-4 text-[var(--text-secondary)] hover:text-[var(--primary-color)] flex items-center">
                      <div className="icon-arrow-left text-lg mr-2"></div> Back
                    </button>
                    <p className="text-xl mb-6">Tell us about your {formData.specificService} task!</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="text" placeholder="Full Name *" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                      <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required />
                      <textarea placeholder="Describe your request *" value={formData.taskDescription} onChange={(e) => setFormData({...formData, taskDescription: e.target.value})} rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" required></textarea>
                      <select value={formData.taskSize} onChange={(e) => setFormData({...formData, taskSize: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]">
                        <option value="">Task Size (optional)</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                      </select>
                      <select value={formData.complexity} onChange={(e) => setFormData({...formData, complexity: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]">
                        <option value="">Complexity (optional)</option>
                        <option value="Simple">Simple</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Complex">Complex</option>
                      </select>
                      <div className="grid md:grid-cols-2 gap-4">
                        <input type="date" value={formData.preferredDate} onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" />
                        <input type="time" value={formData.preferredTime} onChange={(e) => setFormData({...formData, preferredTime: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" />
                      </div>
                      <input type="text" placeholder="Task Location" value={formData.taskLocation} onChange={(e) => setFormData({...formData, taskLocation: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[var(--primary-color)]" />
                      <button type="submit" disabled={isSubmitting} className="w-full px-6 py-4 rounded-full font-medium text-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                        {isSubmitting ? 'Submitting...' : 'Submit Task'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('BookingModal error:', error);
    return null;
  }
}
