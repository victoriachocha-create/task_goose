function Testimonials() {
  try {
    const testimonials = [
      { name: 'Aisha Mohammed', role: 'Business Owner', text: 'TaskGoose has transformed how I manage my business operations. Incredible service!', rating: 5 },
      { name: 'David Chen', role: 'Tech Executive', text: 'The AI matching is spot-on. Always get the right person for the job.', rating: 5 },
      { name: 'Fatima Ibrahim', role: 'Working Parent', text: 'Life-changing! I finally have time for what matters most - my family.', rating: 5 }
    ];

    return (
      <section className="section-padding" style={{backgroundColor: 'var(--secondary-color)'}}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">What Our Clients Say</h2>
          <p className="text-center text-gray-300 mb-16 text-lg">Trusted by thousands across Nigeria</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <div key={i} className="icon-star text-xl" style={{color: 'var(--primary-color)'}}></div>
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-6 italic">"{test.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: 'var(--primary-color)'}}>
                    <div className="icon-user text-xl text-[var(--accent-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{test.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}