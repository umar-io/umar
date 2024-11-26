import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"; // Correct import here for motion

// Motion variants
const variants = {
  open: {
    transition: { duration: 0.3, type: 'spring' },
    rotate: 90,
  },
  closed: {
    rotate: 0,
  },
};

const menuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'linear',
      duration: 0.3
    }
  },
  closed: {
    x: '-100%',
    opacity: 0,
    transition: {
      type: 'linear',
      duration: 0.3
    }
  }
}

// Define the type for individual NavLink
interface NavLink {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollIntoView = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    if (link.path.startsWith('#')) {
      e.preventDefault();  // Prevent default behavior for anchor links
      const target = document.querySelector(link.path);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' , block: 'start' });
      }
    }
  }

  // Define the nav links
  const NavLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Tech Stack', path: '#stack' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ]

  return (
    <nav className="backdrop-filter shadow-xl p-6 lg:py-6 lg:px-[50px] flex items-center justify-between sticky top-0 left-0 w-full z-50 transition-all duration-300">
      <h3 className="text-[25px] text-[#1F271B] font-thin" style={{
        'fontWeight': '500',
        'letterSpacing': '-1px',
      }}>Umar Irale</h3>
      
      {/* Desktop menu */}
      <ul className="hidden lg:flex items-center gap-8">
        {
          NavLinks.map((link, index) => (
            <Link
              to={link.path}
              className="text-[18px] hover:scale-105 text-[#1F271B] font-thin"
              key={index}
              onClick={(e) => scrollIntoView(e, link)} // Handle smooth scrolling onClick
              style={{
                'fontWeight': '500',
                'letterSpacing': '-1px',
              }}
            >
              {link.name}
            </Link>
          ))
        }
      </ul>

      {/* Mobile hamburger */}
      <div className="lg:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <>
            <motion.svg
              variants={variants}
              animate="open"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </motion.svg>
          </>
        ) : (
          <>
            <motion.svg
              variants={variants}
              animate="closed"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </motion.svg>
          </>
        )}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.ul
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          className="lg:hidden absolute top-[80px] right-0 w-full h-[100dvh] py-6 transition-all duration-300 ease-in-out transform"
        >
          <div className="relative z-10 flex flex-col items-center gap-6">
            {
              NavLinks.map((link, index) => (
                <Link
                  to={link.path}
                  onClick={(e) => {
                    toggleMenu(); // Close the mobile menu when a link is clicked
                    scrollIntoView(e, link); // Handle smooth scrolling
                  }}
                  className="font-thin"
                  key={index}
                  style={{
                    // 'color': 'rgba(0, 0, 0, 0.4)',
                    'fontWeight': '500',
                    'letterSpacing': '-1px',
                  }}
                >
                  {link.name}
                </Link>
              ))
            }
          </div>
        </motion.ul>
      )}
    </nav>
  )
}

export default Navbar
