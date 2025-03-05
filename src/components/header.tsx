import Link from 'next/link'
const navLinkClass =
  ' text-gray-600  p-3 px-5 hover:text-white  rounded-full  font-medium hover:opacity-100 hover:bg-primary transition-all duration-1000'
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0  z-50">
      <nav className="mx-w-[1440px] container mx-auto flex px-4 py-4 items-center justify-between">
        <Link href="/">
          <div className="text-2xl text-textPrimary font-bold flex items-center gap-2">
            <div>
              <span>KU</span>
            </div>
          </div>
        </Link>

        <ul className="hidden bg-slate-50 z-10 opacity-70 shadow-lg py-5 px-4 rounded-full md:flex  items-center gap-2 font-primary text-md hover:opacity-100">
          <li>
            {' '}
            <a href="#home" className={navLinkClass}>
              About
            </a>
          </li>
          <li>
            <a href="#features" className={navLinkClass}>
              Projects
            </a>
          </li>
          <li>
            <a href="#pricing" className={navLinkClass}>
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className={navLinkClass}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#subscribe" className={navLinkClass}>
              Help
            </a>
          </li>
        </ul>
        <div></div>
      </nav>
    </header>
  )
}

export default Header
