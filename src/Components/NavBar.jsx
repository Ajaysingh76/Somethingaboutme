import logo from "../assets/Di.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://github.com/evansh28" target="_blank"><FaGithub/></a>
            <a href="https://in.linkedin.com/in/devansh-indoriya-" target="_blank"><FaLinkedin/></a>
            <a href="https://x.com/DevanshIndoriya?t=7SR4mfdDKKDXWiWH0pAGkg&s=09" target="_blank"><FaSquareXTwitter/></a>
        </div>
    </nav>
  )
}

export default NavBar
