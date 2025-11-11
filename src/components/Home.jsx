import { Link } from 'react-router-dom'

const Home = ({ darkMode }) => {
  const recentTravels = [
    {
      date: 'November 1, 2025',
      title: 'Subic',
      description:
        'Adventure-filled getaway to Subic—water activities, resort experiences, and outdoor adventures documented through videos and photos.',
      tags: ['Philippines', 'Beach', 'Adventure']
    },
    {
      date: 'February 14, 2025',
      title: 'Taiwan',
      description:
        'Exploring the vibrant streets of Taipei, night markets, and the beautiful landscapes of Taiwan. A journey through traditional temples and modern cityscapes.',
      tags: ['Asia', 'City']
    }
  ]

  const workExperience = [
    {
      company: 'Freelance',
      role: 'Full Stack Developer',
      period: '2025 — Present'
    },
    {
      company: 'GRAVEPATH',
      role: 'Web Programmer & Project Manager',
      period: '2024 — 2025'
    },
    {
      company: 'ANTON',
      role: 'User Interface Developer',
      period: '2024'
    },
    {
      company: 'GeoTour',
      role: 'Mobile Developer',
      period: '2024'
    }
  ]

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px] items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold text-slate-900 dark:text-slate-100 leading-tight">
                Full Stack Developer, Travel Enthusiast
              </h1>

              <div className="space-y-5 text-base sm:text-lg xl:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                <p>
                  I'm Jireh, and I turn complex problems into elegant digital solutions. I've had the privilege of building scalable web applications for both small businesses and large organizations.
                </p>
                <p>
                  I'm also a passionate traveler who loves exploring new destinations. From detailed campus navigation systems to immersive travel journals, I channel that sense of discovery into every experience I design.
                </p>
                <p>
                  Thanks for stopping by! Feel free to look around and see what I'm up to.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/travels"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm sm:text-base font-medium shadow-sm hover:bg-slate-800 transition-colors"
                >
                  Explore travels
                  <span className="ml-2 text-lg" aria-hidden>
                    →
                  </span>
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-600 text-sm sm:text-base font-medium text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  View experience
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-6">
              <div className="rounded-3xl bg-white/80 dark:bg-slate-950/70 backdrop-blur-md shadow-lg p-6 border border-white/40 dark:border-slate-800">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-4">
                  At a glance
                </p>
                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>Years in development</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">3+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Specialization</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Web & Mobile</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current focus</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">GIS + UX</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/85 dark:bg-slate-950/70 backdrop-blur-md shadow-lg p-6 border border-white/40 dark:border-slate-800">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-3">
                  Next destinations
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Japan</span>
                    <span className="text-teal-500 font-semibold">Researching</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>South Korea</span>
                    <span className="text-teal-500 font-semibold">Wishlist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* Highlights */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Full Stack Development',
              description: 'End-to-end solutions using the MERN stack, React Native, and modern APIs.'
            },
            {
              title: 'Geo-Driven Interfaces',
              description: 'Immersive campus navigation and travel experiences using Mapbox & GIS datasets.'
            },
            {
              title: 'Thoughtful UX',
              description: 'Minimalist, human-centered design grounded in research and iterative prototyping.'
            }
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">
                0{index + 1}
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Travels & Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Travels column */}
          <div className="md:border-r md:border-slate-200 dark:md:border-slate-800 md:pr-8 lg:pr-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                Recent Travels
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Capturing stories across Asia and the Philippines.
            </h2>
            <div className="space-y-8">
              {recentTravels.map((travel) => (
                <article key={travel.title} className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 p-6 shadow-sm">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{travel.date}</p>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    {travel.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {travel.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {travel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs uppercase tracking-wide bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <Link
              to="/travels"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 dark:text-teal-400 mt-6 hover:underline"
            >
              View all travels
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Work column */}
          <div className="md:pl-8 lg:pl-12">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-9 inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 7V5a3 3 0 013-3h6a3 3 0 013 3v2h2a2 2 0 012 2v9a4 4 0 01-4 4H8a4 4 0 01-4-4V9a2 2 0 012-2h2zm2-2v2h8V5a1 1 0 00-1-1H9a1 1 0 00-1 1zm-2 6v7a2 2 0 002 2h10a2 2 0 002-2v-7H6z" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Work</h3>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {workExperience.map((work) => (
                  <div key={work.company} className="py-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{work.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{work.role}</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{work.period}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-medium py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                More on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-6xl mx-auto rounded-3xl bg-slate-900 text-white dark:bg-slate-950 dark:text-slate-100 px-6 py-6 sm:px-8 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Let’s collaborate</p>
            <h3 className="text-xl font-semibold mt-2">Open to internships and freelance opportunities.</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:mecatejireh09@gmail.com"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-medium shadow-sm hover:bg-slate-100 transition-colors"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full border border-white/40 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Home
