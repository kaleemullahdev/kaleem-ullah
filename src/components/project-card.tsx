import Link from 'next/link'
import Image from 'next/image'
type Project = {
  id: string
  name: string
  description: string
  coverImage: string
  url: string
  technologies: string[]
}

type GetRandomColor = () => { bg: string; text: string }

const getRandomColor: GetRandomColor = () => {
  const colorOptions = [
    { bg: 'bg-blue-100', text: 'text-blue-800' },
    { bg: 'bg-green-100', text: 'text-green-800' },
    { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    { bg: 'bg-indigo-100', text: 'text-indigo-800' },
    { bg: 'bg-purple-100', text: 'text-purple-800' },
    { bg: 'bg-pink-100', text: 'text-pink-800' },
    { bg: 'bg-red-100', text: 'text-red-800' },
    { bg: 'bg-gray-100', text: 'text-gray-800' },
    { bg: 'bg-teal-100', text: 'text-teal-800' },
    { bg: 'bg-orange-100', text: 'text-orange-800' },
  ]
  const randomIndex = Math.floor(Math.random() * colorOptions.length)
  return colorOptions[randomIndex > colorOptions.length ? 0 : randomIndex]
}

export const ProjectCard = ({
  name,
  description,
  url,
  coverImage,
  technologies,
}: Project) => {
  return (
    <div className="flex flex-col py-5 bg-white rounded-lg shadow-md cursor-pointer shadow-primary overflow-hidden h-full ">
      <div className="relative h-48 ">
        <Image
          src={`/${coverImage}`}
          alt="Project 1"
          quality={90}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg text-textPrimary font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, key) => {
            const { bg, text } = getRandomColor()
            console.log('bg', bg)
            return (
              <p
                key={key}
                className={`px-2 py-1 ${bg} rounded-full ${text} text-xs font-medium`}
              >
                {tech}
              </p>
            )
          })}
        </div>
        <div className="mt-auto flex justify-center">
          <Link href={url} target="_blank">
            <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
