function FAQAccordion() {
  try {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqData = [
      {
        category: 'About TaskGoose',
        icon: 'info',
        color: '#A8E6CF',
        image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
        questions: [
          {
            q: 'What is TaskGoose?',
            a: 'TaskGoose is your go-to platform for getting everyday tasks done — from home management and errands to repairs, caregiving, and more. Whether you\'re a Smart Tasker booking help or a GoosePro offering your services, TaskGoose connects you with trusted people quickly and safely.'
          }
        ]
      },
      {
        category: 'Booking & Services',
        icon: 'calendar-check',
        color: '#FFB84D',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
        questions: [
          {
            q: 'How do I book a task?',
            a: 'Click "Book a Task" on our homepage, select the service you need, tell us your preferences, and we\'ll match you with verified GoosePros nearby.'
          },
          {
            q: 'What kind of services can I book on TaskGoose?',
            a: 'You can book deep cleaning, laundry, repairs, errands, caregiving, child care, and more. You can also create a Custom Task for unique needs.'
          },
          {
            q: 'How is pricing determined?',
            a: 'Every task is unique — pricing depends on size, duration, and complexity. You can request a quick quote before confirming your booking. No hidden fees.'
          }
        ]
      },
      {
        category: 'Becoming a GoosePro',
        icon: 'user-check',
        color: '#87CEEB',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
        questions: [
          {
            q: 'Who are GoosePros?',
            a: 'GoosePros are verified professionals who complete tasks on the TaskGoose platform.'
          },
          {
            q: 'How do I become a GoosePro?',
            a: 'Go to "Join as a GoosePro," sign up, and tell us about your skills. Once approved, you\'ll start receiving task opportunities that match your expertise.'
          },
          {
            q: 'How do GoosePros get paid?',
            a: 'Payments are securely processed through GooseWallet. Funds are released after task completion and approval by the client.'
          }
        ]
      },
      {
        category: 'GooseMarket (Shop Local)',
        icon: 'shopping-bag',
        color: '#F5A623',
        image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80',
        questions: [
          {
            q: 'What is GooseMarket?',
            a: 'GooseMarket is our upcoming e-marketplace where Goosepreneurs sell their products and GooseShoppers buy local goods, groceries, and lifestyle items — all verified for quality.'
          },
          {
            q: 'Can I register my business to sell on GooseMarket?',
            a: 'Yes! Pre-register under "Partner with Us" to become a Goosepreneur. We\'ll notify you once GooseMarket launches.'
          }
        ]
      },
      {
        category: 'Payments & Security',
        icon: 'shield-check',
        color: '#DDA0DD',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
        questions: [
          {
            q: 'How do I make payments on TaskGoose?',
            a: 'Payments are processed securely through GooseWallet — our in-app wallet for safe transactions.'
          },
          {
            q: 'Is it safe to pay through TaskGoose?',
            a: 'Absolutely. Your funds are protected in GooseWallet until your task is completed, ensuring fairness and trust for both clients and professionals.'
          }
        ]
      },
      {
        category: 'Partnerships',
        icon: 'handshake',
        color: '#FFB6C1',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
        questions: [
          {
            q: 'Can organizations partner with TaskGoose?',
            a: 'Yes! We collaborate with SMEs, corporate teams, real estate agencies, schools, and communities to deliver reliable, on-demand task support. Visit "Partner with Us" to explore opportunities.'
          }
        ]
      },
      {
        category: 'Support & Contact',
        icon: 'message-circle',
        color: '#A8E6CF',
        image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80',
        questions: [
          {
            q: 'How do I reach TaskGoose support?',
            a: 'For now, all inquiries go through our WhatsApp support line. Click "Chat with Us" or use the contact form.'
          },
          {
            q: 'What if my task isn\'t listed?',
            a: 'No problem! Use the "Custom Task" option and describe what you need — we\'ll find the right GoosePro for you.'
          }
        ]
      }
    ];

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    let questionIndex = 0;

    return (
      <section className="py-16 px-6" style={{backgroundColor: 'var(--faq-bg)'}}>
        <div className="max-w-5xl mx-auto space-y-8">
          {faqData.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-1 p-8" style={{backgroundColor: category.color + '20'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: category.color}}>
                      <div className={`icon-${category.icon} text-xl text-white`}></div>
                    </div>
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                  <img src={category.image} alt={category.category} className="w-full h-48 object-cover rounded-xl" />
                </div>
                
                <div className="md:col-span-2 p-8">
                  {category.questions.map((item, qIdx) => {
                    const currentIndex = questionIndex++;
                    return (
                      <div key={qIdx} className="border-b border-gray-200 last:border-0">
                        <button onClick={() => toggleAccordion(currentIndex)} className="w-full py-4 flex justify-between items-center text-left hover:text-[var(--orange-accent)] transition-colors">
                          <span className="font-semibold text-lg pr-4">{item.q}</span>
                          <div className={`icon-${openIndex === currentIndex ? 'chevron-up' : 'chevron-down'} text-xl flex-shrink-0`} style={{color: 'var(--orange-accent)'}}></div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === currentIndex ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                          <p className="text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-orange-100 to-yellow-50 rounded-3xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 bg-orange-500">
              <div className="icon-sparkles text-2xl text-white"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <ul className="text-[var(--text-secondary)] space-y-2">
              <li>• GooseMarket (Shop Local)</li>
              <li>• GooseWallet full rollout</li>
              <li>• Vendor & Business dashboards</li>
            </ul>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FAQAccordion component error:', error);
    return null;
  }
}