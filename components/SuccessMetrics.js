function SuccessMetrics() {
  try {
    const metrics = [
      { number: '100+', label: 'Verified Professionals', icon: 'users' },
      { number: '250+', label: 'Tasks Completed', icon: 'check-circle' }
    ];

    return (
      <section className="py-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
                  <div className={`icon-${metric.icon} text-2xl`} style={{color: 'var(--primary-color)'}}></div>
                </div>
                <h3 className="text-5xl font-bold mb-2" style={{color: 'var(--primary-color)'}}>{metric.number}</h3>
                <p className="text-lg text-[var(--text-secondary)] font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SuccessMetrics component error:', error);
    return null;
  }
}
