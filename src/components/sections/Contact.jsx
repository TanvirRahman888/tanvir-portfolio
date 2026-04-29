"use client"

import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill all fields!")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        toast.success("Message sent successfully!")

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error("Something went wrong!")
      }
    } catch (error) {
      toast.error("Server error!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-purple-400">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
            Let’s work together!
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Have a project or idea? Feel free to contact me anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            {/* Email */}
            <div className="rounded-2xl border bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <Mail className="mb-3 h-6 w-6 text-blue-600 dark:text-purple-400" />
              <h3 className="font-semibold dark:text-white">Email</h3>
              <p className="text-slate-600 dark:text-slate-300">
                tanvirrahman8888@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <Phone className="mb-3 h-6 w-6 text-blue-600 dark:text-purple-400" />
              <h3 className="font-semibold dark:text-white">Phone</h3>
              <p className="text-slate-600 dark:text-slate-300">
                +8801770888106
              </p>
            </div>

            {/* Location */}
            <div className="rounded-2xl border bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <MapPin className="mb-3 h-6 w-6 text-blue-600 dark:text-purple-400" />
              <h3 className="font-semibold dark:text-white">Location</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <Input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="mt-4"
              placeholder="Subject"
              required
            />

            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="mt-4 min-h-36"
              placeholder="Your Message"
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="mt-5 w-full rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}