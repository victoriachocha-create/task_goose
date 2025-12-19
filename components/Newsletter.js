function Newsletter() {
  try {
    return (
      <section id="newsletter" className="py-16 px-6" style={{backgroundColor: 'var(--primary-color)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--accent-color)'}}>Subscribe to the Gooseletter</h2>
          <p className="text-lg mb-8" style={{color: 'var(--secondary-color)'}}>
            Get exclusive updates on new features, special offers, and insider insights from the Goose Lab delivered to your inbox.
          </p>
          <a href="https://tally.so/r/44QDGO" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-[var(--accent-color)] text-white hover:bg-[var(--secondary-color)]">
            Subscribe to Gooseletter
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Newsletter component error:', error);
    return null;
  }
}
