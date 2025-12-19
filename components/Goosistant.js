const Goosistant = React.forwardRef((props, ref) => {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);
    const [hasInteracted, setHasInteracted] = React.useState(false);
    const messagesEndRef = React.useRef(null);
    const popupTimeoutRef = React.useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    React.useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const greetings = [
      "Hi there! 👋 I'm Goosistant. What's weighing on your to-do list today?",
      "Hey! Welcome to TaskGoose 🪿 What can I help lighten off your plate?",
      "Hello! 🌟 Need a hand with something? I'm here to help you task smarter.",
      "Hi! Ready to reclaim your time? Tell me what's on your mind.",
      "Welcome! I'm here to help you get things done, stress-free ✨ What do you need?",
      "Hey there! 👋 I'm Goosistant, your TaskGoose guide. How can I help lighten your load today?",
      "Hi! 🪿 Life feeling a bit heavy? Let's see what we can take off your plate.",
      "Welcome to TaskGoose! I'm here to make your life easier. What brings you here today?"
    ];

    const popupMessages = [
      "👋 Hi there! Can I help you find what you're looking for?",
      "Need help? Goosistant is here 🪿",
      "Not sure where to start? I can guide you.",
      "Have questions? Click here — I've got you.",
      "Hey! How can Goosistant help you today?"
    ];

    const getGreeting = () => greetings[Math.floor(Math.random() * greetings.length)];
    const getPopupMessage = () => popupMessages[Math.floor(Math.random() * popupMessages.length)];

    React.useEffect(() => {
      if (!hasInteracted && !isOpen) {
        popupTimeoutRef.current = setTimeout(() => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 8000);
        }, 40000);

        return () => {
          if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
        };
      }
    }, [hasInteracted, isOpen]);

    const quickSuggestions = [
      "I need help with a task",
      "How does TaskGoose work?",
      "I want to become a GoosePro",
      "Tell me about pricing"
    ];

    const intelligentResponse = (userMessage) => {
      const msg = userMessage.toLowerCase();
      
      if (msg.includes('clean') || msg.includes('housekeep') || msg.includes('home care')) {
        return {
          text: "That's exactly what TaskGoose is here for! 🪿 Our HomeCare professionals handle cleaning, housekeeping, meal prep, and more — all verified and trusted.\n\nOnce you share what you need, we'll match you with the right GoosePro. Ready to book?",
          suggestions: ["Request a task", "What's included?", "How much does it cost?"],
          action: 'book',
          actionType: 'booking'
        };
      }
      
      if (msg.includes('repair') || msg.includes('fix') || msg.includes('plumb') || msg.includes('electric')) {
        return {
          text: "Fix-It services are here to help! ✨ We connect you with verified handymen, electricians, plumbers, and painters.\n\nWhat needs fixing today?",
          suggestions: ["Request a repair", "Electrical work", "Plumbing", "General repairs"],
          action: 'book',
          actionType: 'booking'
        };
      }
      
      if (msg.includes('beauty') || msg.includes('hair') || msg.includes('makeup') || msg.includes('spa')) {
        return {
          text: "Looking fabulous is easier with TaskGoose! 💄 We bring salon-quality care right to you — hair vendors, stylists, makeup artists, nail techs, and spa professionals.\n\nWhat beauty service interests you?",
          suggestions: ["Request a service", "Hair services", "Makeup artist", "Spa treatments"],
          action: 'book',
          actionType: 'booking'
        };
      }
      
      if (msg.includes('care') || msg.includes('elderly') || msg.includes('hospital') || msg.includes('family')) {
        return {
          text: "Your loved ones deserve the best care 💙 Our FamilyCare network connects you with compassionate, verified professionals for elderly care, hospital bed watch, and special needs support.\n\nEvery caregiver is thoroughly vetted for your peace of mind. What kind of care do you need?",
          suggestions: ["Request care service", "How are they verified?", "Tell me more"],
          action: 'book',
          actionType: 'booking'
        };
      }
      
      if (msg.includes('move') || msg.includes('relocat') || msg.includes('pack')) {
        return {
          text: "MoveEase makes relocation stress-free! Home or office, we handle packing, moving, furniture assembly, even move-in cleaning. Planning a move?",
          suggestions: ["Home relocation", "Office relocation", "Get a quote"],
          action: 'book'
        };
      }
      
      if (msg.includes('errand') || msg.includes('shop') || msg.includes('grocery') || msg.includes('event')) {
        return {
          text: "GooseLife Errands handles everything on your list — grocery shopping, medicine pickup, dry cleaning, event planning, travel coordination. What's on your to-do list?",
          suggestions: ["Grocery shopping", "Event planning", "Other errands"],
          action: 'book'
        };
      }
      
      if (msg.includes('pet') || msg.includes('dog') || msg.includes('cat')) {
        return {
          text: "GoosePaw cares for your furry friends! Pet sitting, walking, grooming with trusted animal-loving professionals. What does your pet need?",
          suggestions: ["Pet sitting", "Dog walking", "Pet grooming"],
          action: 'book'
        };
      }
      
      if (msg.includes('security') || msg.includes('smart home') || msg.includes('surveillance')) {
        return {
          text: "SafeNest protects what matters most. Smart home systems, surveillance cameras, security solutions. Looking to secure your home?",
          suggestions: ["Smart home setup", "Security cameras", "Get consultation"],
          action: 'book'
        };
      }
      
      if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('fee')) {
        return {
          text: "Pricing depends on the type of task, urgency, and scope. Once you submit a booking request, everything is clearly communicated before anything proceeds.\n\nMost tasks start from ₦5,000, but we'll give you a personalized quote based on exactly what you need — transparent, fair, no hidden fees ✨\n\nReady to get your quote?",
          suggestions: ["Request a task", "How payment works", "Tell me more"],
          action: 'book',
          actionType: 'booking'
        };
      }
      
      if (msg.includes('how') && (msg.includes('work') || msg.includes('process') || msg.includes('book'))) {
        return {
          text: "Think of TaskGoose as your trusted coordinator — you tell us what you need, and we help connect the dots so life feels lighter and more organized.\n\nHere's the flow:\n• Share your task\n• We match you with a verified GoosePro\n• Get a clear quote\n• Approve and relax while we handle it\n\nWould you like help getting started, or do you want to explore a bit more first?",
          suggestions: ["Request a task", "What services?", "How are GoosePros verified?"],
          action: 'book'
        };
      }
      
      if (msg.includes('ai') || msg.includes('technology') || msg.includes('smart') || msg.includes('intelligent')) {
        return {
          text: "We're building TaskGoose with intelligent systems in mind — designed to learn patterns, improve coordination, and make everyday decisions easier over time.\n\nYou'll see this evolve as the platform grows. Our focus is always on making your life simpler, not more complicated.\n\nWant to experience how TaskGoose works today?",
          suggestions: ["Request a task", "Tell me more", "What's coming next?"]
        };
      }
      
      if (msg.includes('safe') || msg.includes('trust') || msg.includes('verif') || msg.includes('secure')) {
        return {
          text: "Your safety and peace of mind matter most to us 🛡️\n\nEvery GoosePro is:\n✓ ID-verified\n✓ Background-checked\n✓ Rated by real users\n✓ Supported by our trust & safety team\n\nPayments are protected through secure escrow — funds release only when you're satisfied.\n\nYou're in good hands with TaskGoose. Ready to experience stress-free service?",
          suggestions: ["Request a task", "How verification works", "Payment security"],
          action: 'book',
          actionType: 'booking'
        };
      }
      
      if (msg.includes('impact') || msg.includes('community') || msg.includes('empower') || msg.includes('social')) {
        return {
          text: "TaskGoose is more than a platform — it's a movement 🪿\n\nWe're creating:\n• Job opportunities for skilled professionals\n• Skill documentation and career growth paths\n• Community empowerment through ethical coordination\n• Trust-based connections that lift everyone up\n\nEvery task booked supports someone's livelihood and strengthens local communities.\n\nWant to be part of this impact?",
          suggestions: ["Request a task", "Become a GoosePro", "Learn our mission"]
        };
      }
      
      if (msg.includes('become') || msg.includes('join') || msg.includes('goosepro') || msg.includes('partner') || msg.includes('work for')) {
        return {
          text: "That's exciting! 🪿 The GoosePro Network helps skilled professionals like you get visible, verified, and connected to real opportunities.\n\nBenefits include:\n• Access to paying clients daily\n• Secure payments through escrow\n• Free professional training\n• Growth support & community\n\nIf you have skills people rely on, we'd love to have you! Ready to join?",
          suggestions: ["Join GoosePro Network", "Learn more benefits", "What can I offer?"],
          action: 'goosepro',
          actionType: 'signup'
        };
      }
      
      if (msg.includes('market') || msg.includes('shop local') || msg.includes('sell') || msg.includes('vendor') || msg.includes('goosepreneur')) {
        return {
          text: "GooseMarket is our upcoming marketplace where local vendors (Goosepreneurs) sell products and GooseShoppers buy quality goods. Currently in development, but you can join the waitlist! Interested as shopper or seller?",
          suggestions: ["Join as GooseShopper", "Join as Goosepreneur", "Tell me more"],
          action: 'market'
        };
      }
      
      if (msg.includes('newsletter') || msg.includes('gooseletter') || msg.includes('updates') || msg.includes('subscribe')) {
        return {
          text: "Stay in the loop with the Gooseletter! 📬\n\nGet exclusive updates on:\n• New features and services\n• Special offers\n• Insider insights from the Goose Lab\n• Community stories\n\nWant to subscribe?",
          suggestions: ["Subscribe to Gooseletter", "What's Goose Lab?", "Tell me more"],
          action: 'newsletter'
        };
      }
      
      if (msg.includes('career') || msg.includes('job') || msg.includes('hire') || msg.includes('team')) {
        return {
          text: "We're building something extraordinary! We have opportunities in tech, design, marketing, operations, and more. Interested in joining the flight?",
          suggestions: ["View positions", "Tell me more", "How to apply?"],
          action: 'careers'
        };
      }
      
      if (msg.includes('contact') || msg.includes('talk') || msg.includes('speak') || msg.includes('representative')) {
        return {
          text: "I'd be happy to connect you with our team! 💬\n\nYou can reach us through:\n• Contact form on our website\n• Email: info@mytaskgoose.com\n• WhatsApp: +234 813 352 2599\n\nOr I can help answer your questions right here. What would you prefer?",
          suggestions: ["Visit contact page", "I have a question", "Request a task"],
          action: 'contact'
        };
      }
      
      if (msg.includes('help') || msg.includes('support') || msg.includes('question')) {
        return {
          text: "I'm here to help! Ask me about services, how TaskGoose works, pricing, becoming a GoosePro, or anything else. What would you like to know?",
          suggestions: ["What services?", "How does booking work?", "Talk to someone"]
        };
      }
      
      return {
        text: "I want to make sure I guide you to the right place 🪿\n\nI can help you:\n• Book a task and lighten your load\n• Learn about our services\n• Join as a GoosePro and grow your business\n• Answer any questions you have\n\nWould you like help getting started, or do you want to explore a bit more first?",
        suggestions: ["Request a task", "Explore services", "Become a GoosePro", "Ask a question"]
      };
    };

    const handleOpen = () => {
      setIsOpen(true);
      setHasInteracted(true);
      setShowPopup(false);
      if (messages.length === 0) {
        setTimeout(() => addBotMessage(getGreeting(), quickSuggestions), 500);
      }
    };

    React.useImperativeHandle(ref, () => ({
      handleOpen
    }));

    const addBotMessage = (text, suggestions = []) => {
      setMessages(prev => [...prev, { type: 'bot', text, suggestions, timestamp: new Date() }]);
    };

    const addUserMessage = (text) => {
      setMessages(prev => [...prev, { type: 'user', text, timestamp: new Date() }]);
    };

    const handleUserInput = (input) => {
      if (!input.trim()) return;
      addUserMessage(input);
      setInputValue('');
      setIsTyping(true);
      
      setTimeout(() => {
        const response = intelligentResponse(input);
        setIsTyping(false);
        addBotMessage(response.text, response.suggestions || []);
        
        const inputLower = input.toLowerCase();
        
        if (response.actionType === 'booking' && (inputLower.includes('book') || inputLower.includes('request') || inputLower.includes('yes') || inputLower.includes('ready'))) {
          setTimeout(() => {
            addBotMessage("Perfect! Opening the request form for you now... 🪿");
            setTimeout(() => window.open('https://tally.so/r/vGM8QD', '_blank'), 500);
          }, 1000);
        }
        
        else if (response.actionType === 'signup' && (inputLower.includes('join') || inputLower.includes('sign') || inputLower.includes('ready'))) {
          setTimeout(() => {
            addBotMessage("Excellent! Let's get you set up as a GoosePro... ✨");
            setTimeout(() => window.open('https://tally.so/r/PdpWgQ', '_blank'), 500);
          }, 1000);
        }
        
        else if (response.action === 'market' && (inputLower.includes('shopper') || inputLower.includes('seller') || inputLower.includes('vendor'))) {
          setTimeout(() => {
            addBotMessage("Taking you to GooseMarket info...");
            setTimeout(() => window.location.href = 'shop-local.html', 500);
          }, 1000);
        }
        
        else if (response.action === 'newsletter' && inputLower.includes('subscribe')) {
          setTimeout(() => {
            addBotMessage("Perfect! Opening the Gooseletter signup...");
            setTimeout(() => window.open('https://tally.so/r/44QDGO', '_blank'), 500);
          }, 1000);
        }
        
        else if (response.action === 'contact' && (inputLower.includes('visit') || inputLower.includes('contact page'))) {
          setTimeout(() => {
            addBotMessage("Taking you to our contact page...");
            setTimeout(() => window.location.href = 'contact.html', 500);
          }, 1000);
        }
        
        else if (response.action === 'careers' && (inputLower.includes('position') || inputLower.includes('apply') || inputLower.includes('view'))) {
          setTimeout(() => {
            addBotMessage("Great! Let me show you our open positions...");
            setTimeout(() => window.location.href = 'careers.html', 500);
          }, 1000);
        }
      }, 800);
    };

    return (
      <React.Fragment>
        {showPopup && !isOpen && (
          <div className="fixed bottom-28 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-4 z-50 animate-fadeInUp border-2 border-[var(--primary-color)] max-w-xs md:left-6 md:transform-none md:translate-x-0" onClick={handleOpen}>
            <div className="flex items-start gap-3 cursor-pointer">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 animate-bounce">
                <path d="M24 4C18.477 4 14 8.477 14 14V20C14 22.209 15.791 24 18 24H30C32.209 24 34 22.209 34 20V14C34 8.477 29.523 4 24 4Z" fill="#A8E6CF"/>
                <circle cx="20" cy="16" r="2" fill="#1A202C"/>
                <circle cx="28" cy="16" r="2" fill="#1A202C"/>
                <path d="M10 18C8.895 18 8 18.895 8 20C8 21.105 8.895 22 10 22H12V18H10Z" fill="#FFB84D"/>
                <path d="M24 28C18.477 28 14 32.477 14 38V42C14 43.105 14.895 44 16 44H32C33.105 44 34 43.105 34 42V38C34 32.477 29.523 28 24 28Z" fill="white"/>
                <path d="M20 34H22V40H20V34Z" fill="#FFB84D"/>
                <path d="M26 34H28V40H26V34Z" fill="#FFB84D"/>
              </svg>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{getPopupMessage()}</p>
                <p className="text-xs text-gray-600 italic">Click to chat with me</p>
              </div>
            </div>
          </div>
        )}

        <button 
          onClick={handleOpen} 
          onMouseEnter={() => !isOpen && !hasInteracted && setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full shadow-2xl flex items-center justify-center z-50 transition-all hover:scale-110 group bg-white border-4 border-[var(--primary-color)] md:left-6 md:transform-none md:translate-x-0"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
            <path d="M24 4C18.477 4 14 8.477 14 14V20C14 22.209 15.791 24 18 24H30C32.209 24 34 22.209 34 20V14C34 8.477 29.523 4 24 4Z" fill="#A8E6CF"/>
            <circle cx="20" cy="16" r="2" fill="#1A202C"/>
            <circle cx="28" cy="16" r="2" fill="#1A202C"/>
            <path d="M10 18C8.895 18 8 18.895 8 20C8 21.105 8.895 22 10 22H12V18H10Z" fill="#FFB84D"/>
            <path d="M24 28C18.477 28 14 32.477 14 38V42C14 43.105 14.895 44 16 44H32C33.105 44 34 43.105 34 42V38C34 32.477 29.523 28 24 28Z" fill="white"/>
            <path d="M20 34H22V40H20V34Z" fill="#FFB84D"/>
            <path d="M26 34H28V40H26V34Z" fill="#FFB84D"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 animate-pulse border-2 border-white"></div>
        </button>

        {isOpen && (
          <React.Fragment>
            <div className="fixed inset-0 bg-black/20 z-40 animate-fadeIn" onClick={() => setIsOpen(false)}></div>
            
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-96 max-w-[calc(100vw-2rem)] rounded-3xl shadow-2xl overflow-hidden z-50 animate-fadeInUp border-2 border-[var(--primary-color)] md:left-6 md:transform-none md:translate-x-0" style={{backgroundColor: '#FFFFFF', maxHeight: '80vh', display: 'flex', flexDirection: 'column'}}>
            <div className="p-4 flex items-center justify-between" style={{backgroundColor: '#A8E6CF'}}>
              <div className="flex items-center gap-3">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C18.477 4 14 8.477 14 14V20C14 22.209 15.791 24 18 24H30C32.209 24 34 22.209 34 20V14C34 8.477 29.523 4 24 4Z" fill="white"/>
                  <circle cx="20" cy="16" r="2" fill="#1A202C"/>
                  <circle cx="28" cy="16" r="2" fill="#1A202C"/>
                  <path d="M10 18C8.895 18 8 18.895 8 20C8 21.105 8.895 22 10 22H12V18H10Z" fill="#FFB84D"/>
                  <path d="M24 28C18.477 28 14 32.477 14 38V42C14 43.105 14.895 44 16 44H32C33.105 44 34 43.105 34 42V38C34 32.477 29.523 28 24 28Z" fill="white"/>
                  <path d="M20 34H22V40H20V34Z" fill="#FFB84D"/>
                  <path d="M26 34H28V40H26V34Z" fill="#FFB84D"/>
                </svg>
                <div>
                  <span className="font-bold text-gray-900 block">Goosistant</span>
                  <span className="text-xs text-gray-700">Task smarter, zero stress</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                <div className="icon-x text-lg text-gray-900"></div>
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50" style={{minHeight: '300px', maxHeight: 'calc(80vh - 180px)'}}>
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] ${msg.type === 'user' ? 'bg-[#2D3748] text-white' : 'bg-white text-gray-900 border border-gray-200'} p-3 rounded-2xl shadow-sm`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      {msg.suggestions && msg.suggestions.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {msg.suggestions.map((sug, sidx) => {
                            const isActionButton = sug.toLowerCase().includes('book') || sug.toLowerCase().includes('join') || sug.toLowerCase().includes('sign');
                            return (
                              <button 
                                key={sidx} 
                                onClick={() => handleUserInput(sug)} 
                                className={`px-3 py-1 rounded-full text-xs font-medium border-2 transition-all hover:scale-105 ${isActionButton ? 'font-semibold' : ''}`}
                                style={{
                                  borderColor: '#A8E6CF', 
                                  color: isActionButton ? 'white' : '#2D3748', 
                                  backgroundColor: isActionButton ? '#A8E6CF' : 'white'
                                }}
                              >
                                {sug}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-2xl shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#A8E6CF] animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-[#A8E6CF] animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 rounded-full bg-[#A8E6CF] animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t-2 border-gray-200 bg-white">
              <div className="flex gap-2">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleUserInput(inputValue)} placeholder="Type your message..." className="flex-1 px-4 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-[#A8E6CF] text-sm transition-colors bg-white text-gray-900" />
                <button onClick={() => handleUserInput(inputValue)} disabled={!inputValue.trim()} className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-[#2D3748]" style={{opacity: inputValue.trim() ? 1 : 0.5}}>
                  <div className="icon-send text-lg text-white"></div>
                </button>
              </div>
              <p className="text-xs text-center text-gray-600 mt-2 italic">Task smarter, zero stress 🪿✨</p>
            </div>
          </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  } catch (error) {
    console.error('Goosistant component error:', error);
    return null;
  }
});
