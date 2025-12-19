function Testimonials() {
  try {
    useScrollAnimation();
    
    const testimonials = [
      { 
        name: 'Chioma Nwosu', 
        role: 'Business Owner, Lagos', 
        text: 'TaskGoose has transformed how I manage my business operations. The cleaning and errands services are top-notch!', 
        rating: 5
      },
      { 
        name: 'Tunde Ogunleye', 
        role: 'Tech Professional', 
        text: 'The AI matching is spot-on. I always get connected with the right GoosePro for my home repairs.', 
        rating: 5
      },
      { 
        name: 'Amaka Chukwu', 
        role: 'Working Parent', 
        text: 'Life-changing! TaskGoose helps me balance work and family. Their caregiving services are exceptional.', 
        rating: 5
      },
      { 
        name: 'Ibrahim Musa', 
        role: 'Small Business Owner', 
        text: 'As a restaurant owner, I needed reliable cleaning and maintenance. TaskGoose delivers every single time.', 
        rating: 5
      },
      { 
        name: 'Grace Adeyemi', 
        role: 'Real Estate Agent', 
        text: 'I use TaskGoose for property staging and maintenance. Their attention to detail is impressive.', 
        rating: 5
      },
      { 
        name: 'Samuel Okoro', 
        role: 'GoosePro Partner', 
        text: 'Joining TaskGoose as a GoosePro was the best decision. I get consistent work, fair pay, and support!', 
        rating: 5
      }
    ];

    return (
      <section className="section-padding transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-reveal">What Our Clients Say</h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 text-lg text-reveal">Trusted by thousands across Nigeria</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger-container>
            {testimonials.map((test, idx) => (
              <div key={idx} className="stagger-item rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700" style={{backgroundColor: 'var(--background)'}}>
                <div className="flex mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <div key={i} className="icon-star text-base" style={{color: 'var(--primary-color)'}}></div>
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">"{test.text}"</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-semibold text-sm">{test.name}</h4>
                  <p className="text-xs text-[var(--text-secondary)]">{test.role}</p>
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
