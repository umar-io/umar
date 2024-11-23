import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const footerLink = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/umar-io'
    },
    {
      icon: <FaLinkedin />,
      link: 'www.linkedin.com/in/umard3v'
    },
    {
      icon: <FaXTwitter />,
      link: 'https://x.com/umar_d3v'
    },
  ]
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-slate-950 w-full flex justify-between items-center p-6 lg:py-4 lg:px-[50px] bottom-0">
      <p className="text-white lg:text-2xl text-[12px]"> &copy; {year} Umar Irale</p>
      <article className="flex gap-8">
        {
          footerLink.map((footerlink, index)=>(
           <Link to={footerlink.link} key={index} className="lg:text-2xl text-[18px] text-white">
              {footerlink.icon}
           </Link>
          ))
        }
      </article>
    </footer>
  )
}

export default Footer