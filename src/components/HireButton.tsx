'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Links } from './hero'

export const HireButton: React.FC<{ professionalLinks: Links[] }> = ({
  professionalLinks,
}) => {
  const [showIcons, setShowIcons] = useState(false)

  const onHireClick = () => {
    setShowIcons(!showIcons)
  }

  return (
    <div className="relative">
      {/* {showIcons ? ( */}
      <div
        className={`absolute top-1 w-1/3 flex flex-row md:flex-row justify-between  items-center  bottom-full   transform -translate-x-1/5   space-x-2 transition-all
        duration-300 ${
          showIcons
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 pointer-events-none'
        } }`}
      >
        {professionalLinks?.map((link) => {
          return (
            <div
              className="bg-white  rounded-full shadow-lg shadow-gray-500 p-2 relative"
              key={link.icon}
            >
              <Link href={link.src || '/'} target="_blank" className="max-auto">
                <Image
                  src={`/${link.icon}`}
                  width={40}
                  height={40}
                  alt="github"
                  className="text-white"
                />
              </Link>
            </div>
          )
        })}
      </div>
      <div className="pt-5">
        <button
          className="bg-primary text-white px-20 py-3 mt-10 rounded-lg hover:bg-red-600 shadow-lg hover:shadow-xl transition duration-200 cursor-pointer font-medium text-lg"
          onClick={onHireClick}
        >
          Hire Me
        </button>
      </div>
    </div>
  )
}
