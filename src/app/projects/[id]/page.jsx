import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-blue-600 dark:text-purple-400"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-950 dark:text-white">
          {project.name}
        </h1>

        {/* Image */}
        <div className="relative mt-6 h-75 overflow-hidden rounded-2xl md:h-100">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="mt-6 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 dark:bg-purple-500/20 dark:text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2 text-white dark:bg-purple-600"
          >
            Live Site
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            className="inline-flex items-center rounded-lg border px-5 py-2 dark:border-slate-700"
          >
            GitHub
            <FaGithub className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Challenges */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            Challenges
          </h2>

          <ul className="mt-4 list-disc pl-5 text-slate-600 dark:text-slate-300">
            {project.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            Future Improvements
          </h2>

          <ul className="mt-4 list-disc pl-5 text-slate-600 dark:text-slate-300">
            {project.improvements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
