import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "BSc in Engineering (Computer Science & Engineering)",
    institute: "European University of Bangladesh",
    year: "Completed",
  },
  {
    degree: "Diploma in Engineering (Computer Technology)",
    institute: "Magura Polytechnic Institute",
    year: "Completed",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-50 px-6 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Title */}
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-purple-400">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
            My Academic Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-300 pl-6 dark:border-slate-700">
          {educationData.map((item, index) => (
            <div key={index} className="mb-10 relative">

              {/* Dot */}
              <div className="absolute -left-2.75 top-1 h-5 w-5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-purple-400" />

                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {item.degree}
                  </h3>
                </div>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {item.institute}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="h-4 w-4" />
                  {item.year}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}