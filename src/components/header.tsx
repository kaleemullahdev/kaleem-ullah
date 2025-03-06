import Link from 'next/link'

const navLinkClass =
  ' text-gray-600  p-3 px-5 hover:text-white  rounded-full  font-medium hover:opacity-100 hover:bg-primary transition-all duration-1000'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0  z-50">
      <nav className="mx-w-[1440px] container mx-auto flex px-4 py-4 items-center justify-between">
        <Link href="/">
          <div className="text-2xl text-textPrimary font-bold flex items-center gap-2">
            <div className="bg-slate-50 shadow-lg p-2 rounded-full">
              <span>KU</span>
            </div>
          </div>
        </Link>

        <ul className="hidden bg-slate-50 z-10 opacity-70 shadow-lg py-5 px-4 rounded-full md:flex  items-center gap-2 font-primary text-md hover:opacity-100">
          <li>
            {' '}
            <Link href="/" className={navLinkClass}>
              About
            </Link>
          </li>
          <li>
            <Link href="/" className={navLinkClass}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" className={navLinkClass}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/" className={navLinkClass}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/" className={navLinkClass}>
              Help
            </Link>
          </li>
        </ul>
        <div></div>
      </nav>
    </header>
  )
}
