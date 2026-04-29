"use client";

import { motion } from "motion/react";
import { SiReact } from "react-icons/si";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, level: "95%" },
  { name: "CSS", icon: SiCss, level: "90%" },
  { name: "JavaScript", icon: SiJavascript, level: "85%" },
  { name: "React.js", icon: SiReact, level: "88%" },
  { name: "Next.js", icon: SiNextdotjs, level: "80%" },
  { name: "Tailwind", icon: SiTailwindcss, level: "90%" },
  { name: "Bootstrap", icon: SiBootstrap, level: "85%" },
  { name: "Firebase", icon: SiFirebase, level: "70%" },
  { name: "Git", icon: SiGit, level: "85%" },
  { name: "GitHub", icon: SiGithub, level: "85%" },
  { name: "Postman", icon: SiPostman, level: "75%" },
  { name: "Figma", icon: SiFigma, level: "70%" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-purple-400">
            My Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            A modern stack focused on building responsive, clean and
            user-friendly web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 text-3xl text-blue-600 transition group-hover:scale-110 dark:from-purple-500/20 dark:to-blue-500/20 dark:text-purple-400">
                    <Icon />
                  </div>

                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {skill.name}
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    style={{ width: skill.level }}
                    className="h-full rounded-full bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-700"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
