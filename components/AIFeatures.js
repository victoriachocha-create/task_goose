function AIFeatures() {
  try {
    const [showLabModal, setShowLabModal] = React.useState(false);

    return (
      <>
        <section className="section-padding transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.05), var(--background))'}}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Intelligent Automation at Work</h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">Smart systems, predictive support</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl p-12 shadow-2xl text-center border border-gray-200 dark:border-gray-700 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, var(--card-background), var(--hover-bg))'}}>
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className="icon-cpu text-4xl text-white"></div>
                </div>
                <h3 className="text-3xl font-bold mb-6">TaskGoose Smart Systems</h3>
                <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                  From SmartMatch technology to predictive support and seamless integrations — discover how TaskGoose is building intelligent features that make life easier.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="features.html" className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                    <div className="icon-sparkles text-xl mr-3"></div>
                    Explore All Features
                  </a>
                  <button onClick={() => setShowLabModal(true)} className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg border-2 hover:shadow-lg transition-all hover:scale-105" style={{borderColor: 'var(--primary-color)', color: 'var(--text-primary)'}}>
                    <div className="text-2xl mr-3">🥚</div>
                    Inside the GooseLab
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-[var(--text-secondary)]">
                Subscribe to our <a href="https://tally.so/r/44QDGO" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] font-semibold hover:underline">Gooseletter</a> for exclusive updates on new features and innovations.
              </p>
            </div>
          </div>
        </section>

        {showLabModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowLabModal(false)}>
            <div className="rounded-3xl max-w-lg w-full p-8 animate-fadeInUp border border-gray-200 dark:border-gray-700 transition-colors duration-300" style={{backgroundColor: 'var(--background)'}} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowLabModal(false)} className="float-right w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
                <div className="icon-x text-2xl"></div>
              </button>
              <div className="text-center">
                <div className="text-6xl mb-4">🥚</div>
                <h3 className="text-2xl font-bold mb-4">Inside the Goose Lab</h3>
                <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                  Inside the Goose Lab is where TaskGoose experiments with the future of living, productivity, and human-centered design.
                </p>
                <a href="gooselab.html" className="inline-block px-8 py-4 rounded-full font-medium text-lg" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                  Enter the Lab
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error('AIFeatures component error:', error);
    return null;
  }
}