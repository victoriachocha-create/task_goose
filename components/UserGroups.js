function UserGroups() {
  try {
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
      <section className="section-padding bg-white" data-name="user-groups" data-file="components/UserGroups.js">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {groups.map((group, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: 'var(--primary-color)'}}>
                  <div className={`icon-${group.icon} text-2xl text-[var(--accent-color)]`}></div>
                </div>
                <img src={group.image} alt={group.title} className="w-full h-48 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-semibold mb-3">{group.title}</h3>
                <p className="text-[var(--text-secondary)]">{group.description}</p>
              </div>
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