// Enhanced scroll animation utility with staggered effects
const useScrollAnimation = () => {
  React.useEffect(() => {
    const animateOnScroll = () => {
      // Animate elements with data-animate attribute
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible && !element.classList.contains('animated')) {
          const animationType = element.getAttribute('data-animate');
          element.classList.add('animated', animationType);
        }
      });

      // Animate scroll-reveal elements
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
      scrollRevealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        
        if (isVisible && !element.classList.contains('revealed')) {
          element.classList.add('revealed');
        }
      });

      // Animate image-reveal elements
      const imageRevealElements = document.querySelectorAll('.image-reveal');
      imageRevealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.7;
        
        if (isVisible && !element.classList.contains('revealed')) {
          element.classList.add('revealed');
        }
      });

      // Animate text-reveal elements
      const textRevealElements = document.querySelectorAll('.text-reveal');
      textRevealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible && !element.classList.contains('revealed')) {
          element.classList.add('revealed');
        }
      });

      // Staggered animation for grouped items
      const staggerGroups = document.querySelectorAll('[data-stagger-container]');
      staggerGroups.forEach(container => {
        const rect = container.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        
        if (isVisible && !container.classList.contains('stagger-animated')) {
          container.classList.add('stagger-animated');
          const items = container.querySelectorAll('.stagger-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('revealed');
            }, index * 150);
          });
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
};

const parallaxEffect = () => {
  React.useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-section');
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);
};
