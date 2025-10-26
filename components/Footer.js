function Footer() {
  try {
    return (
      <footer className="bg-[var(--accent-color)] text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="https://app.trickle.so/storage/public/images/anonymous/bbed88bc-9edb-4974-a571-e2c3488e8d36.png" alt="TaskGoose Logo" className="h-12 mb-4" />
              <p className="text-gray-400">Task Smarter, Zero Stress</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="about.html" className="hover:text-[var(--primary-color)] transition-colors">About Us</a></li>
                <li><a href="services.html" className="hover:text-[var(--primary-color)] transition-colors">Services</a></li>
                <li><a href="corporate.html" className="hover:text-[var(--primary-color)] transition-colors">Corporate</a></li>
                <li><a href="goosepro.html" className="hover:text-[var(--primary-color)] transition-colors">Become a GoosePro</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><div className="icon-mail text-lg mr-2"></div> info@mytaskgoose.com</li>
                <li className="flex items-center"><div className="icon-phone text-lg mr-2"></div> +234 813 352 2599</li>
                <li className="flex items-center"><div className="icon-map-pin text-lg mr-2"></div> Lagos, Nigeria</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className="icon-facebook text-lg"></div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className="icon-twitter text-lg"></div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className="icon-instagram text-lg"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TaskGoose Tech Solutions Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}