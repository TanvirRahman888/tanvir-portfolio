import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { name: "GitHub", href: "#", icon: FaGithub },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "Twitter / X", href: "#", icon: FaXTwitter },
  { name: "Email", href: "mailto:tanvirrahman8888@gmail.com", icon: MdEmail },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white text-slate-950 dark:bg-[#050b18] dark:text-white "
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-2 px-6 md:grid-cols-2 py-6">
        
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Frontend Developer
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Hi, I’m
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              Md Tanvir
            </span>
            <br />
            Rahman
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-slate-600 dark:text-slate-300">
            I build responsive, user-friendly and modern
            <br className="hidden md:block" />{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              web applications
            </span>{" "}
            that provide great experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-7 text-white shadow-lg shadow-purple-500/25">
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-xl border-purple-500/60 bg-white/60 px-7 text-slate-900 dark:bg-transparent dark:text-white"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 flex gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-900 shadow-sm transition hover:-translate-y-1 hover:text-purple-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white dark:hover:text-purple-400"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.22),transparent_35%)]" />

            <div className="absolute right-[10%] top-[16%] h-[330px] w-[330px] rounded-full bg-blue-100 dark:bg-purple-700/70 md:h-[470px] md:w-[470px]" />

            <div className="absolute right-[5%] top-[12%] hidden h-[420px] w-[420px] lg:h-[480px] lg:w-[480px] animate-spin-slow rounded-full border border-blue-300/30 dark:border-purple-400/20 md:block" />

            <div className="absolute left-[45%] bottom-[12%] hidden h-24 w-24 animate-float bg-[radial-gradient(circle,#7c3aed_2px,transparent_2px)] opacity-40 [background-size:18px_18px] md:block" />


            <div className="absolute left-10 top-24 h-56 w-56 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-10 right-20 h-56 w-56 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
          </div>
          <Image
            src="/images/profile.png"
            alt="Md Tanvir Rahman"
            width={560}
            height={680}
            priority
            className="relative z-10 object-contain"
          />

          <p className="absolute right-0 top-24 z-20 hidden -rotate-6 text-4xl font-light italic text-slate-700 dark:text-white md:block">
            Tanvir
          </p>
        </div>
      </div>
    </section>
  );
}
