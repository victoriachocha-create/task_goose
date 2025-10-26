function Hero({ onBookTask, onJoinGoosePro }) {
  try {
    return (
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <AnimatedGoose />
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Task Smarter,<br />
                  <span className="text-[var(--primary-color)]">Zero Stress</span>
                </h1>
              </div>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                AI-driven lifestyle and productivity platform for individuals, businesses, and service providers across Nigeria and beyond.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={onBookTask} className="btn-primary">Book a Task</button>
                <a href="partnership.html" className="btn-secondary">Partner with Us</a>
                <button onClick={onJoinGoosePro} className="btn-secondary">Join as GoosePro</button>
              </div>
            </div>
            
            <div className="relative">
              <img src="https://app.trickle.so/storage/public/images/anonymous/13e4cff8-9d74-448a-b69b-b9d11c2010c3.jpeg" alt="TaskGoose Platform" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <AnimatedGoose />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}