import { Link } from 'react-router-dom'
import AboutImage from '../assets/About.jpg'

const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column - Text Content */}
        <div className="lg:order-1 space-y-6 lg:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            I'm Jireh, full stack developer from Taguig.
          </h1>
          
          <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I'm Jireh, a 4th-year Information Technology student at National University – MOA Campus specializing in Mobile and Web Applications. I build full-stack solutions across the MERN stack, React Native, Flutter, Mapbox, and Firebase—leading projects like GRAVEPATH for cemetery navigation, ANTON for minimalist ecommerce, GeoTour for GIS campus tours, and Hustla for job marketplaces.
            </p>
            
            <p>
              I'm also passionate about exploring the world and traveling. I've been to places like Taiwan, Vietnam, Bohol, and Batangas, and I love documenting my journeys and experiences. Traveling has been instrumental in building my confidence, broadening my perspective, and teaching me to adapt to new environments—skills that translate directly into my work as a developer.
            </p>
            
            <p>
              I prioritize exploring the world and spending time with friends. The past pandemic served as a reminder that life is short, and I believe in making memorable moments with loved ones while pursuing my passion for technology and travel.
            </p>
          </div>
        </div>

        {/* Right Column - Profile Picture and Social Links */}
        <div className="lg:order-2 flex flex-col items-center lg:items-start">
          <div className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-2xl bg-gray-200 dark:bg-gray-700 mb-6 sm:mb-8 flex items-center justify-center overflow-hidden shadow-lg">
            <img src={AboutImage} alt="Jireh Mecate" className="w-full h-full object-cover" />
          </div>
          
          <div className="space-y-3 sm:space-y-4 w-full max-w-xs">
            <a
              href="https://github.com/Jayrawrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Follow on GitHub.</span>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm sm:text-base">Follow on LinkedIn.</span>
            </a>
            
            <a
              href="mailto:mecatejireh09@gmail.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm sm:text-base">mecatejireh09@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-16 sm:mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex gap-4 mb-4 sm:mb-0">
            <Link to="/about" className="link-hover">About</Link>
            <Link to="/uses" className="link-hover">Uses</Link>
          </div>
          <p>© {new Date().getFullYear()} Jireh Mecate</p>
        </div>
      </footer>
    </main>
  )
}

export default About
