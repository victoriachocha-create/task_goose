function CategoryBubblesModal({ isOpen, onClose, onCategorySelect }) {
  try {
    if (!isOpen) return null;

    const categories = [
      { name: 'Cleaning', icon: 'sparkles', color: '#A8E6CF', desc: 'Professional cleaning services for your home' },
      { name: 'Errands', icon: 'shopping-bag', color: '#DDA0DD', desc: 'Let us handle your daily errands' },
      { name: 'Repairs', icon: 'wrench', color: '#FFB84D', desc: 'Expert repair and maintenance solutions' },
      { name: 'Caregiving', icon: 'heart', color: '#FFB6C1', desc: 'Compassionate care for your loved ones' },
      { name: 'Home Support', icon: 'home', color: '#87CEEB', desc: 'Complete home management services' }
    ];

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={onClose}>
        <div className="rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto animate-fadeInUp transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}} onClick={(e) => e.stopPropagation()}>
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">What can we help with today?</h2>
              <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <div className="icon-x text-2xl"></div>
              </button>
            </div>
            <p className="text-lg text-[var(--text-secondary)] mb-8 italic">Your peace matters. Let's lighten your load.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat, idx) => (
                <button key={idx} onClick={() => { onCategorySelect(cat.name); onClose(); }} className="p-6 rounded-2xl border-2 border-gray-200 hover:border-[var(--primary-color)] transition-all duration-300 text-center group hover:scale-105 hover:shadow-lg" style={{backgroundColor: 'var(--background)'}}>
                  <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110" style={{backgroundColor: cat.color}}>
                    <div className={`icon-${cat.icon} text-2xl text-white`}></div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--primary-color)] transition-colors">{cat.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{cat.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CategoryBubblesModal error:', error);
    return null;
  }
}