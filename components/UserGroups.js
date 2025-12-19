function UserGroups() {
  try {
    useScrollAnimation();
    
    const groups = [
      {
        title: 'For Individuals',
        description: 'Outsource your daily tasks — cleaning, errands, care, and more.',
        icon: 'users',
        image: 'https://app.trickle.so/storage/public/images/anonymous/a784bf07-6e56-48df-a628-cccf6a3f19ef.jpeg'
      },
      {
        title: 'For Businesses',
        description: 'Streamline your operations with TaskGoose corporate solutions.',
        icon: 'briefcase',
        image: 'https://images.presentationgo.com/2025/05/business-team-meeting-office.jpg'
      },
      {
        title: 'For Partners',
        description: 'Grow your business as a verified GoosePro.',
        icon: 'handshake',
        image: 'https://teamfocusins.com/wp-content/uploads/2025/08/caucasian-businessman-making-a-handshake-together-2025-03-24-23-14-58-utc-min-scaled.jpg'
      }
    ];

    return (
        <section className="py-32 px-6 transition-colors duration-300" style={{backgroundColor: 'var(--background)'}} data-name="user-groups" data-file="components/UserGroups.js">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6 text-reveal" style={{letterSpacing: '-0.02em'}}>Who We Serve</h2>
          <p className="text-xl text-center text-[var(--text-secondary)] mb-20 max-w-3xl mx-auto font-light text-reveal">Built for homes, businesses, and communities. No matter who you are, we make life lighter with zero stress.</p>
          <div className="grid md:grid-cols-3 gap-8" data-stagger-container>
            {groups.map((group, idx) => (
              <a key={idx} href={group.title === 'For Individuals' ? 'https://tally.so/r/vGM8QD' : group.title === 'For Partners' ? 'https://tally.so/r/PdpWgQ' : 'corporate.html'} target={group.title !== 'For Businesses' ? '_blank' : '_self'} rel="noopener noreferrer" className="stagger-item rounded-2xl p-8 shadow-lg card-hover border border-gray-200 dark:border-gray-700 group cursor-pointer" style={{backgroundColor: 'var(--background)'}}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className={`icon-${group.icon} text-2xl text-white`}></div>
                </div>
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img src={group.image} alt={group.title} className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-[var(--primary-color)] transition-all duration-500">{group.title}</h3>
                <p className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all duration-500">{group.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('UserGroups component error:', error);
    return null;
  }
}
