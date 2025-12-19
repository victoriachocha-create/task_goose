function TrustedBy() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    const partners = [
      {
        name: 'Quantaray',
        logo: 'https://app.trickle.so/storage/public/images/usr_176ccf8f60000001/d476c344-8188-4d5d-ab64-fb7bdcb9a54c.png'
      },
      {
        name: 'Legaltainment',
        logo: 'https://app.trickle.so/storage/public/images/usr_176ccf8f60000001/d0c7853c-09e5-4b71-abf8-4700fdb27350.jpeg'
      }
    ];

    return (
      <section ref={sectionRef} className="py-20 px-6 transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-[var(--text-primary)]" style={{letterSpacing: '-0.02em'}}>Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  animation: isVisible ? `popBounce 0.6s ease-out ${idx * 0.15}s both` : 'none'
                }}
              >
                <div className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer hover:scale-110 hover:-translate-y-2" style={{backgroundColor: 'var(--background)'}}>
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-24 w-40 object-contain mx-auto mb-4 filter brightness-100 contrast-110 transition-all duration-300 group-hover:brightness-110 group-hover:scale-105" 
                  />
                  <p className="font-bold text-[var(--text-primary)] text-xl uppercase tracking-wide transition-all duration-300 group-hover:text-[var(--primary-color)] group-hover:-translate-y-1">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('TrustedBy component error:', error);
    return null;
  }
}
