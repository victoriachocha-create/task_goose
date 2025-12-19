function HowItWorks({ onOpenGoosistant }) {
  try {
    useScrollAnimation();
    
    const steps = [
      { number: '1', title: 'Choose Your Task', description: 'Select from our wide range of services or create a custom task', icon: 'list-checks' },
      { number: '2', title: 'Get Matched', description: 'Our AI matches you with the perfect verified GoosePro', icon: 'zap' },
      { number: '3', title: 'Relax & Track', description: 'Sit back while we handle it. Track progress in real-time', icon: 'smile' }
    ];

    return (
      <section className="section-padding transition-colors duration-300" style={{backgroundColor: 'var(--background)'}} data-name="how-it-works" data-file="components/HowItWorks.js">
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4" data-animate="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-center">How It Works</h2>
              <AnimatedGoose onClick={onOpenGoosistant} />
            </div>
          <p className="text-center text-[var(--text-secondary)] mb-16 text-lg" data-animate="animate-fadeInUp">Three simple steps to a stress-free life</p>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} data-animate="animate-fadeInUp" style={{animationDelay: `${idx * 0.15}s`}} className="text-center group cursor-pointer">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className={`icon-${step.icon} text-3xl text-[var(--accent-color)] transition-transform duration-300 group-hover:scale-110`}></div>
                </div>
                <div className="text-5xl font-bold mb-4 transition-all duration-300 group-hover:scale-110" style={{color: 'var(--primary-color)'}}>{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">{step.title}</h3>
                <p className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">{step.description}</p>
              </div>
            ))}
          </div>
            <div className="text-center mt-16">
              <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                Request a Task
              </a>
            </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HowItWorks component error:', error);
    return null;
  }
}
