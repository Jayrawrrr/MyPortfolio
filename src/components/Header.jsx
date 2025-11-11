import { Link, useLocation } from 'react-router-dom'

const Header = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/home' && (location.pathname === '/home' || location.pathname === '/')) return true
    if (path !== '/home' && location.pathname.startsWith(path)) return true
    return false
  }

  const linkBase = 'px-4 py-2 rounded-full text-sm font-medium transition-colors'
  const linkActive = 'text-slate-900 dark:text-slate-100'
  const linkIdle = 'text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400'

  return (
    <header className="sticky top-0 z-10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Branding */}
          <Link
            to="/home"
            className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            Jireh Mecate
          </Link>

          {/* Pill Nav */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm px-2 py-1">
              <div className="flex items-center gap-1">
                <Link to="/about" className={`${linkBase} ${isActive('/about') ? linkActive : linkIdle}`}>About</Link>
                <Link to="/travels" className={`${linkBase} ${isActive('/travels') ? linkActive : linkIdle}`}>Travels</Link>
                <Link to="/experience" className={`${linkBase} ${isActive('/experience') ? linkActive : linkIdle}`}>Experience</Link>
                <Link to="/uses" className={`${linkBase} ${isActive('/uses') ? linkActive : linkIdle}`}>Uses</Link>
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

