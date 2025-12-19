function ReferralBanner() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const [countdown, setCountdown] = React.useState(5);

    React.useEffect(() => {
      const randomDelay = Math.random() * 15000 + 5000;
      
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        setCountdown(5);
        
        const countdownInterval = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(countdownInterval);
              setIsVisible(false);
              return 5;
            }
            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(countdownInterval);
      }, randomDelay);

      return () => clearTimeout(showTimer);
    }, []);

    if (!isVisible) return null;

    return (
      <div className="fixed bottom-24 left-0 right-0 z-40 animate-fadeIn" data-name="referral-banner" data-file="components/ReferralBanner.js">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #A8E6CF 0%, #87CEEB 100%)'}}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            </div>
            
            <div className="flex items-center gap-4 relative z-10 flex-1">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md">
                <div className="icon-gift text-2xl" style={{color: '#A8E6CF'}}></div>
              </div>
              <div>
                <p className="font-bold text-lg text-white">Refer 2 friends and get 10% off your next booking!</p>
                <p className="text-sm text-white/90">Share TaskGoose and save on your next task</p>
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/30 font-bold text-white text-lg">
                {countdown}
              </div>
              <a href="https://tally.so/r/vGM8QD" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full font-semibold text-sm bg-white hover:shadow-lg transition-all hover:scale-105" style={{color: '#2D3748'}}>
                Refer Now
              </a>
              <button onClick={() => setIsVisible(false)} className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors">
                <div className="icon-x text-lg text-white"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ReferralBanner component error:', error);
    return null;
  }
}