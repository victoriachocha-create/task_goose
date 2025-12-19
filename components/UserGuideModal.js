function UserGuideModal({ isOpen, onClose, onBookNow }) {
  try {
    if (!isOpen) return null;

    const steps = [
      { number: 1, text: 'Visit the website: www.mytaskgoose.com', icon: 'globe' },
      { number: 2, text: 'Click on your task', icon: 'mouse-pointer-click' },
      { number: 3, text: 'Choose your preferred service option', icon: 'list' },
      { number: 4, text: 'Fill in the necessary details', icon: 'file-text' },
      { number: 5, text: 'Book the task', icon: 'calendar-check' },
      { number: 6, text: 'Get matched with a GoosePro', icon: 'users' },
      { number: 7, text: 'Task done!!', icon: 'check-circle' }
    ];

    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={onClose}>
        <div className="rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}} onClick={(e) => e.stopPropagation()}>
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">How to Book a Task</h2>
              <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <div className="icon-x text-2xl"></div>
              </button>
            </div>

            <p className="text-lg text-[var(--text-secondary)] mb-8 italic">Tell us what you need — we'll handle it with care.</p>

            <div className="space-y-6 mb-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-transform duration-300 hover:scale-110" style={{backgroundColor: 'var(--primary-color)', color: 'white'}}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`icon-${step.icon} text-xl transition-transform duration-300 hover:scale-110`} style={{color: 'var(--primary-color)'}}></div>
                      <p className="text-lg font-medium">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => { onClose(); onBookNow(); }} className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                Get Started Today
                <div className="icon-arrow-right text-xl ml-2"></div>
              </button>
              <p className="text-lg mt-6 font-light italic" style={{color: 'var(--primary-color)'}}>Sit back. We'll take it from here.</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UserGuideModal error:', error);
    return null;
  }
}