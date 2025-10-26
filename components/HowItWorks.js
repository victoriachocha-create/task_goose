function HowItWorks() {
  try {
    const steps = [
      { number: '1', title: 'Choose Your Task', description: 'Select from our wide range of services or create a custom task', icon: 'list-checks' },
      { number: '2', title: 'Get Matched', description: 'Our AI matches you with the perfect verified GoosePro', icon: 'zap' },
      { number: '3', title: 'Relax & Track', description: 'Sit back while we handle it. Track progress in real-time', icon: 'smile' }
    ];

    return (
      <section className="section-padding bg-white" data-name="how-it-works" data-file="components/HowItWorks.js">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl font-bold text-center">How It Works</h2>
            <AnimatedGoose />
          </div>
          <p className="text-center text-[var(--text-secondary)] mb-16 text-lg">Three simple steps to a stress-free life</p>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className={`icon-${step.icon} text-3xl text-[var(--accent-color)]`}></div>
                </div>
                <div className="text-5xl font-bold mb-4" style={{color: 'var(--primary-color)'}}>{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[var(--text-secondary)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HowItWorks component error:', error);
    return null;
  }
}