function CategoryModal({ isOpen, onClose, category }) {
  try {
    if (!isOpen || !category) return null;

    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={onClose}>
        <div className="rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-fadeInUp transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}} onClick={(e) => e.stopPropagation()}>
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{backgroundColor: category.color}}>
                  <div className={`icon-${category.icon} text-3xl text-white`}></div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{category.name}</h2>
                  <p className="text-lg mt-1" style={{color: category.color}}>{category.tagline}</p>
                </div>
              </div>
              <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <div className="icon-x text-2xl"></div>
              </button>
            </div>

            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">{category.description}</p>

            <h3 className="text-xl font-semibold mb-4">Available Services:</h3>
            <div className="grid grid-cols-2 gap-3">
              {category.services.map((service, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 hover:shadow-md transition-all cursor-pointer border border-gray-100">
                  <div className="flex items-center">
                    <div className="icon-check-circle text-lg mr-3" style={{color: category.color}}></div>
                    <span className="font-medium text-sm">{service}</span>
                  </div>
                </div>
              ))}
            </div>

            {category.disclaimer && (
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-yellow-800"><strong>Note:</strong> {category.disclaimer}</p>
              </div>
            )}

            <button onClick={onClose} className="w-full mt-8 px-6 py-4 rounded-full font-medium text-lg" style={{backgroundColor: category.color, color: 'white'}}>
              Request This Service
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CategoryModal error:', error);
    return null;
  }
}