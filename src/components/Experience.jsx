import { Link } from 'react-router-dom'
import GeoTourVideo from '../assets/GeoTour.mp4'

const Experience = () => {
  const freelance = [
    {
      company: "Freelance Project",
      role: "Full Stack Developer",
      period: "October 2025",
      description: "Wedding Invitation with RSVP Form (Sign-In Admin Management for RSVP)",
      tech: ["React", "ReactJS", "CSS", "Firebase"],
      link: "https://wedding-invitation-three-rho.vercel.app/"
    }
  ]

  const universityExperience = [
    {
      year: "3rd Year",
      period: "2024-2025",
      projects: [
        {
          title: "Capstone Project: GRAVEPATH",
          role: "Web Programmer and Project Manager",
          description: "A Mobile and Web Navigation and Management System for Garden of Memories Cemetery",
          tech: ["NodeJS", "ReactJS", "ExpressJS", "Mongoose", "MongoDB Atlas", "Mapbox", "Mapbox GL JS / React Mapbox", "GeoJSON", "Graph/Network", "OpenAI API", "Gmail API", "CSS"],
          link: "https://grave-path.com/"
        },
        {
          title: "E-Commerce Project: ANTON",
          description: "Modern minimalist footwear and accessories — including leather shoes, wallets, and bags designed for daily elegance and comfort",
          role: "User Interface Developer",
          tech: ["ReactJS", "Tailwind", "CSS", "Figma"],
          link: "https://anton-navy-tau.vercel.app/",
          figmaLink: "https://www.figma.com/design/w8byfRq8TGqEjyEfN0gq9x/Untitled?node-id=0-1&t=xDjlRV8n1QFKkFUY-1",
          canvaLink: "https://www.canva.com/design/DAG1OhSKy_w/D7veFePKIagRcue8N8yUWg/edit?utm_content=DAG1OhSKy_w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
          title: "Flutter Project: GeoTour",
          description: "A Flutter-Developed Virtual Tour Application for National University Mall of Asia Using Geographic Information System (GIS)",
          role: "Mobile Developer",
          tech: ["Flutter"],
          details: "Developed a GIS-based virtual campus tour mobile app in Flutter for a private university with no available datasets or APIs, creating customized directional paths from the campus entrance to all floors using longitude and latitude coordinates, integrating a 360° panorama viewer by stitching 16 photos per location into interactive hotspots, and implementing intuitive directional controls (N/E/S/W) to provide realistic and immersive campus navigation",
          video: GeoTourVideo
        }
      ]
    },
    {
      year: "2nd Year",
      period: "2023-2024",
      projects: [
        {
          title: "Android App Project: Hustla",
          description: "Developed an app using Android Studio that allows users to post jobs, chat in real-time to negotiate and confirm tasks, and submit required documents for job-specific verification",
          tech: ["React-Native", "ReactJS"],
          canvaLink: "https://www.canva.com/design/DAF9ub9i1Tc/O0Bhwj9wiE1SOqE2zhWXOw/edit?utm_content=DAF9ub9i1Tc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          canvaNote: "Splash screen"
        },
        {
          title: "Web Development",
          description: "Introduction to HTML, CSS, Tailwind, and React",
          tech: ["HTML", "CSS", "Tailwind", "React"]
        },
        {
          title: "Java Project (Spring Tool Suite)",
          description: "Introduction for Capstone Project | User Interface only",
          tech: ["Java"],
          canvaLink: "https://www.canva.com/design/DAGgt8b7k6A/bsWD768xdhT7ke0A6wV7wQ/edit?utm_content=DAGgt8b7k6A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          canvaNote: "Basic wireframe"
        },
        {
          title: "Multimedia",
          description: "Video and Photo Editing",
          tech: ["Photoshop", "Photopea", "Canva", "Figma", "Premiere"],
          canvaLink: "https://www.canva.com/design/DAGQ6JDCFlw/DQSnmK5QEgrZpIK1bRxmyA/edit?utm_content=DAGQ6JDCFlw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
          title: "Networking",
          description: "Introduction and Advance Networking",
          tech: ["Cisco Packet Tracer"]
        },
        {
          title: "Hardware",
          description: "Assemble, Maintenance, Repair, Troubleshoot, and Installation"
        }
      ]
    },
    {
      year: "1st Year",
      period: "2022-2023",
      projects: [
        {
          title: "Java Project (NetBeans): Caffeinator",
          description: "POS system of a Coffee shop with visual design of the actual coffee",
          tech: ["Java", "NetBeans"]
        },
        {
          title: "Java Project (NetBeans): BLDY Bank",
          description: "A basic banking system with deposit, withdraw, loan and interest calculation",
          tech: ["Java", "NetBeans"]
        }
      ]
    }
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Experience</h1>
      
      <div className="space-y-12 sm:space-y-16">
        {/* Freelance Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">Freelance</h2>
          <div className="space-y-6 sm:space-y-8">
            {freelance.map((item, index) => (
              <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 sm:pl-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {item.company}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.role}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-0">{item.period}</span>
                </div>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 hover:underline text-sm sm:text-base inline-block mb-3"
                  >
                    View Project →
                  </a>
                )}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* University Experience Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">University Experience</h2>
          <div className="space-y-8 sm:space-y-12">
            {universityExperience.map((year, yearIndex) => (
              <div key={yearIndex} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 sm:pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {year.year}
                  </h3>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-gray-500">{year.period}</span>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {year.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="ml-0 sm:ml-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {project.title}
                      </h4>
                      {project.role && (
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                          {project.role}
                        </p>
                      )}
                      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3">
                        {project.description}
                      </p>
                      {project.details && (
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 italic">
                          {project.details}
                        </p>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:underline text-sm sm:text-base inline-block mb-3 mr-4"
                        >
                          View Project →
                        </a>
                      )}
                      {project.figmaLink && (
                        <a
                          href={project.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:underline text-sm sm:text-base inline-block mb-3 mr-4"
                        >
                          Figma Design →
                        </a>
                      )}
                      {project.canvaLink && (
                        <div className="mb-3 mr-4">
                          <a
                            href={project.canvaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 dark:text-teal-400 hover:underline text-sm sm:text-base inline-block"
                          >
                            Canva Design →
                          </a>
                          {project.canvaNote && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({project.canvaNote})</span>
                          )}
                        </div>
                      )}
                      {project.video && (
                        <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 w-64 mx-auto">
                          <video
                            src={project.video}
                            className="w-full"
                            controls
                            preload="metadata"
                            playsInline
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
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

export default Experience

