import { Link } from 'react-router-dom'

const Uses = () => {
  const categories = [
    {
      title: "Development",
      items: [
        "VS Code - Primary code editor",
        "React & React Native - Frontend development",
        "Node.js & Express - Backend development",
        "MongoDB Atlas - Database management",
        "Firebase - Real-time database and authentication",
        "Git & GitHub - Version control"
      ]
    },
    {
      title: "Design",
      items: [
        "Figma - UI/UX design",
        "Photoshop & Photopea - Image editing",
        "Canva - Quick graphics",
        "Premiere - Video editing"
      ]
    },
    {
      title: "Tools",
      items: [
        "Android Studio - Mobile development",
        "Mapbox - GIS mapping and navigation",
        "OpenAI API - AI chatbot development",
        "Postman - API testing",
        "Cisco Packet Tracer - Networking"
      ]
    },
    {
      title: "Languages",
      items: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Java",
        "Python",
        "HTML/CSS",
        "Tailwind CSS"
      ]
    }
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Uses</h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">
        Tools and technologies I use for development, design, and productivity.
      </p>

      <div className="space-y-8 sm:space-y-12">
        {categories.map((category, index) => (
          <section key={index}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">
              {category.title}
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-base sm:text-lg text-gray-700 dark:text-gray-300 flex items-start"
                >
                  <span className="text-teal-600 dark:text-teal-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
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

export default Uses

