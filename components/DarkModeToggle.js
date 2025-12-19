function DarkModeToggle() {
  try {
    const [isDark, setIsDark] = React.useState(() => {
      const saved = localStorage.getItem('darkMode');
      return saved === 'true';
    });

    React.useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', isDark);
    }, [isDark]);

    return (
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 transition-all hover:scale-110"
        style={{backgroundColor: isDark ? 'var(--secondary-color)' : 'var(--primary-color)'}}
        aria-label="Toggle dark mode"
        data-name="dark-mode-toggle"
        data-file="components/DarkModeToggle.js"
      >
        <div className={`icon-${isDark ? 'sun' : 'moon'} text-2xl`} style={{color: isDark ? 'var(--primary-color)' : 'var(--accent-color)'}}></div>
      </button>
    );
  } catch (error) {
    console.error('DarkModeToggle component error:', error);
    return null;
  }
}