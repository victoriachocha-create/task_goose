function Categories({ onBookTask }) {
  try {
    const categories = [
      { name: 'HomeCare', icon: 'home', color: '#A8E6CF' },
      { name: 'FixIt', icon: 'wrench', color: '#FFB84D' },
      { name: 'FamilyCare', icon: 'heart', color: '#FFB6C1' },
      { name: 'MoveEase', icon: 'truck', color: '#87CEEB' },
      { name: 'BizSupport', icon: 'briefcase', color: '#DDA0DD' },
      { name: 'GooseLife Concierge', icon: 'sparkles', color: '#B0E0E6' }
    ];

    return (
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Categories</h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 text-lg">Whatever you need, we've got you covered</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} onClick={() => onBookTask(cat.name)} className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4" style={{backgroundColor: cat.color}}>
                  <div className={`icon-${cat.icon} text-2xl text-white`}></div>
                </div>
                <h3 className="font-semibold">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Categories component error:', error);
    return null;
  }
}