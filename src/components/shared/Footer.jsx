import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        
        {/* Left */}
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Md Tanvir Rahman. All rights reserved.
        </p>

        {/* Right Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/TanvirRahman888"
            target="_blank"
            className="text-slate-600 transition hover:text-black dark:text-slate-400 dark:hover:text-white"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/tanvirrahman888/"
            target="_blank"
            className="text-slate-600 transition hover:text-black dark:text-slate-400 dark:hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://www.facebook.com/tanvirrahman888"
            target="_blank"
            className="text-slate-600 transition hover:text-black dark:text-slate-400 dark:hover:text-white"
          >
            <FaFacebook size={18} />
          </a>
        </div>

      </div>
    </footer>
  )
}