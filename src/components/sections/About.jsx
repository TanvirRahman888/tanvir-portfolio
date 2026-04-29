import { User, Mail, Phone, MapPin, Settings, BadgeCheck, Briefcase, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const personalInfo = [
  {
    icon: User,
    label: "Name",
    value: "Md Tanvir Rahman",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tanvirrahman.bd@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1712-345678",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: Settings,
    label: "Freelance",
    value: "Available",
    green: true,
  },
]

const stats = [
  {
    icon: Briefcase,
    number: "1+",
    label: "Years Experience",
  },
  {
    icon: BadgeCheck,
    number: "10+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    number: "5+",
    label: "Happy Clients",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-16 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_0.8fr]">
            
            {/* Left */}
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-purple-400">
                About Me
              </p>

              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Get to know me!
              </h2>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                I’m Md Tanvir Rahman, a passionate Frontend Developer who loves
                turning ideas into interactive, user-friendly web applications.
                I enjoy building clean, efficient and scalable solutions with
                modern technologies.
              </p>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                When I’m not coding, you’ll find me exploring new tech,
                listening to music or spending time with family.
              </p>

              <Button
                variant="outline"
                className="mt-6 rounded-xl border-blue-200 px-6 text-blue-600 dark:border-purple-500/50 dark:text-purple-400"
              >
                More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Middle Info */}
            <div className="border-slate-200 dark:border-slate-800 lg:border-l lg:pl-10">
              <div className="space-y-6">
                {personalInfo.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="mt-1 text-blue-600 dark:text-purple-400">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-950 dark:text-white">
                          {item.label}
                        </h3>

                        <p
                          className={`text-slate-600 dark:text-slate-300 ${
                            item.green ? "font-semibold text-green-500 dark:text-green-400" : ""
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Stats */}
            <div className="space-y-4">
              {stats.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-purple-500/20 dark:text-purple-400">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                        {item.number}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}