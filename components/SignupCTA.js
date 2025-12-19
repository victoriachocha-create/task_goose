function SignupCTA() {
  try {
    useScrollAnimation();
    
    return (
      <section className="py-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}} data-name="signup-cta" data-file="components/SignupCTA.js">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700 text-center transition-colors duration-300" style={{background: 'linear-gradient(135deg, var(--card-background), var(--hover-bg))'}}>
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
              <div className="icon-user-plus text-3xl text-white"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-reveal">Interested in using TaskGoose but not ready to request a task yet?</h2>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed text-reveal">
              Sign up and we'll be here when you're ready.
            </p>
            
            <a 
              href="https://tally.so/r/J9dA24" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-reveal"
              style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}
            >
              <div className="icon-user-plus text-xl mr-3"></div>
              Sign Up for Free
            </a>
            
            <p className="text-sm text-[var(--text-secondary)] mt-6 italic">
              No credit card required. Start exploring when you're ready.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SignupCTA component error:', error);
    return null;
  }
}