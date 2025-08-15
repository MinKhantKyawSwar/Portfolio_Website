import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <>
      <nav className=" w-full h-10% mb-10 flex items-center justify-between py-3">
        <div className='flex flex-shrink-0 items-center'>
          PORTFOLIO
        </div>
        <div className='m-8 flex items-center justify-center gap-5 cursor-pointer z-0'>
          {/* <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a> */}
          <a href="https://github.com/MinKhantKyawSwar" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/minkhant.kyawswar.frost" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/wu_kyiiiii/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar