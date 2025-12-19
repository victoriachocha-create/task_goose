function Footer({ onOpenUserGuide }) {
  try {
    return (
      <footer className="bg-[var(--accent-color)] text-white" data-name="footer" data-file="components/Footer.js">
        <div className="py-16 px-6 border-b border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in using TaskGoose but not ready to request a task yet?</h3>
            <p className="text-xl text-gray-300 mb-8">Sign up and we'll be here when you're ready.</p>
            <a href="https://tally.so/r/J9dA24" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
              <div className="icon-user-plus text-xl mr-3"></div>
              Sign Up Now
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-6 gap-8 mb-12">
            <div>
              <img src="https://app.trickle.so/storage/public/images/anonymous/bbed88bc-9edb-4974-a571-e2c3488e8d36.png" alt="TaskGoose Logo" className="h-12 mb-4" />
              <p className="text-gray-400">Task Smarter, Zero Stress</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="about.html" className="hover:text-[var(--primary-color)] transition-colors">About Us</a></li>
                <li><a href="services.html" className="hover:text-[var(--primary-color)] transition-colors">Services</a></li>
                <li><a href="features.html" className="hover:text-[var(--primary-color)] transition-colors">Features</a></li>
                <li><a href="pricing.html" className="hover:text-[var(--primary-color)] transition-colors">Pricing</a></li>
                <li><a href="careers.html" className="hover:text-[var(--primary-color)] transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">For Partners</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="corporate.html" className="hover:text-[var(--primary-color)] transition-colors">Corporate</a></li>
                <li><a href="goosepro.html" className="hover:text-[var(--primary-color)] transition-colors">GoosePro</a></li>
                <li><a href="partnership.html" className="hover:text-[var(--primary-color)] transition-colors">Partnerships</a></li>
                <li><a href="resources.html" className="hover:text-[var(--primary-color)] transition-colors">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="resources.html" className="hover:text-[var(--primary-color)] transition-colors">User Guide</a></li>
                <li><a href="faq.html" className="hover:text-[var(--primary-color)] transition-colors">FAQ</a></li>
                <li><a href="contact.html" className="hover:text-[var(--primary-color)] transition-colors">Contact</a></li>
                <li><a href="gooselab.html" className="hover:text-[var(--primary-color)] transition-colors">GooseLab</a></li>
                <li><a href="https://tally.so/r/44QDGO" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors">Gooseletter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="legal.html" className="hover:text-[var(--primary-color)] transition-colors">Legal Guidelines</a></li>
                <li><a href="legal.html" className="hover:text-[var(--primary-color)] transition-colors">Privacy Policy</a></li>
                <li><a href="legal.html" className="hover:text-[var(--primary-color)] transition-colors">Terms of Service</a></li>
                <li><a href="legal.html" className="hover:text-[var(--primary-color)] transition-colors">Cookie Policy</a></li>
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
                <a href="https://web.facebook.com/profile.php?id=61574938701613" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className="icon-facebook text-lg text-white"></div>
                </a>
                <a href="https://x.com/taskgoose" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className="icon-twitter text-lg text-white"></div>
                </a>
                <a href="https://www.instagram.com/reel/DIzGwxfN-Tg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className="icon-instagram text-lg text-white"></div>
                </a>
                <a href="https://www.tiktok.com/@taskgoose" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/taskgoose-technologies-bb51b136b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className="icon-linkedin text-lg text-white"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TaskGoose Technologies Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}