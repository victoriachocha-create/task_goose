function AnimatedGoose() {
  try {
    return (
      <div className="inline-block animate-bounce" data-name="animated-goose" data-file="components/AnimatedGoose.js">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C18.477 4 14 8.477 14 14V20C14 22.209 15.791 24 18 24H30C32.209 24 34 22.209 34 20V14C34 8.477 29.523 4 24 4Z" fill="#A8E6CF"/>
          <circle cx="20" cy="16" r="2" fill="#1A202C"/>
          <circle cx="28" cy="16" r="2" fill="#1A202C"/>
          <path d="M10 18C8.895 18 8 18.895 8 20C8 21.105 8.895 22 10 22H12V18H10Z" fill="#FFB84D"/>
          <path d="M24 28C18.477 28 14 32.477 14 38V42C14 43.105 14.895 44 16 44H32C33.105 44 34 43.105 34 42V38C34 32.477 29.523 28 24 28Z" fill="white"/>
          <path d="M20 34H22V40H20V34Z" fill="#FFB84D"/>
          <path d="M26 34H28V40H26V34Z" fill="#FFB84D"/>
        </svg>
      </div>
    );
  } catch (error) {
    console.error('AnimatedGoose component error:', error);
    return null;
  }
}