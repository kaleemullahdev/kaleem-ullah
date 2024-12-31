import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">Kaleem Ullah</div>
        <ul className="flex space-x-6">
          {[
            "Home",
            "About",
            "Resume",
            "Services",
            "Skills",
            "Projects",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`}>
                <span className="text-white-700 hover:text-gray-900">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
