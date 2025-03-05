import { PRIMARY_LINK_CLASS, PROJECTS_DATA } from '~/constants'
import { ProjectCard } from './project-card'
export const Projects = () => {
  return (
    <section className="section-container" id="home">
      <div className="flex flex-col items-center gap-12 z-30  p-10 rounded-xl">
        <h3 className="text-headingText lg:text-3xl md:text-2xl text-2xl font-bold leading-3 text-center w-full">
          My Projects
        </h3>
        <div>
          <ul className="hidden bg-slate-50 shadow-md py-5 px-4 rounded-full md:flex  items-center gap-2 font-primary text-sm">
            <li>
              <a href="#home" className={PRIMARY_LINK_CLASS}>
                All
              </a>
            </li>
            <li>
              <a href="#features" className={PRIMARY_LINK_CLASS}>
                Front-end
              </a>
            </li>
            <li>
              <a href="#pricing" className={PRIMARY_LINK_CLASS}>
                Full Stack
              </a>
            </li>
            <li>
              <a href="#testimonials" className={PRIMARY_LINK_CLASS}>
                Next.js
              </a>
            </li>
            <li>
              <a href="#subscribe" className={PRIMARY_LINK_CLASS}>
                Gatsby
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
          {PROJECTS_DATA?.map((data) => {
            return <ProjectCard key={data?.id} {...data} />
          })}
        </div>
      </div>
    </section>
  )
}
