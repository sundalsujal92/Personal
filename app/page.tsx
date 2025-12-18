"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  MessageSquare,
  FileText,
  Braces,
  Layout,
  Palette,
  Server,
  UploadCloud,
  Database,
  Bell,
  Activity,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"

/* -------------------- IMAGES -------------------- */

const a1 = "/1736509356512.png"
const a2 = "/1736509356517.png"
const a3 = "/1736509356523.png"
const a4 = "/1736509356527.png"
const a5 = "/1736509356533.png"
const a6 = "/1736509356537.png"
const a7 = "/1736509356541.png"
const a8 = "/1736509356546.png"
const a9 = "/1736509356550.png"
const a10 = "/qr.png"
const a11 = "/1738488717329.png"
const a12 = "/1738488717320.png"

/* -------------------- TYPES -------------------- */

type FormData = {
  name: string
  email: string
  message: string
}

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
}

type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  image: string
  site: string
  url: string
}

/* -------------------- PAGE -------------------- */

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  /* -------- FORM HANDLERS -------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, message } = formData
    const whatsappMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0A%0A${message}`
    const phoneNumber = "916284902591"
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

    window.open(whatsappURL, "_blank")
  }

  /* -------- MOUNT FIX -------- */

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  /* -------- PROJECT DATA -------- */

  const cardsData: ProjectCardProps[] = [
    {
      title: "Job Market",
      description:
        "A Job Market application with frontend and backend, user/admin roles, scoring, and tracking.",
      image: a12,
      site: "https://github.com/sundalsujal92/JobMarket",
      url: "https://www.linkedin.com/",
      tags: ["React", "Node"],
    },
    {
      title: "Weather App",
      description:
        "A weather application fetching real-time data using JavaScript APIs.",
      image: a2,
      site: "https://sujalkumar3033.netlify.app",
      url: "https://www.linkedin.com/",
      tags: ["JavaScript", "API"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <InteractiveShapes />

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <AnimatedBoxes />
        <div className="container px-4 mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Hey! It's Sujal Kumar
            </h1>
            <p className="mt-4 text-gray-300 text-xl">
              🚀 Full-Stack Developer
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <ScrollLink to="work" smooth duration={500}>
                <Button>View Projects</Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth duration={500}>
                <Button variant="outline">Contact Me</Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <AboutMe />
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Braces className="text-purple-500" />}
            title="Full-Stack Development"
            description="Scalable web applications using React, Node, MongoDB."
          />
          <ServiceCard
            icon={<Server className="text-pink-500" />}
            title="API Development"
            description="Secure REST APIs with Express and Node.js."
          />
          <ServiceCard
            icon={<Database className="text-purple-500" />}
            title="Database Design"
            description="MongoDB & Firebase architecture."
          />
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg"
        >
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            className="w-full mb-4 p-3 bg-gray-800 rounded"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="w-full mb-4 p-3 bg-gray-800 rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={formData.message}
            className="w-full mb-4 p-3 bg-gray-800 rounded"
          />
          <button className="w-full bg-purple-600 p-3 rounded">
            Send via WhatsApp
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center">
        <div className="flex justify-center gap-6">
      <SocialIcon
  icon={<Github />}
  href="https://github.com/sundalsujal92"
  label="GitHub"
/>

<SocialIcon
  icon={<MessageSquare />}
  href="https://wa.me/+916284902591"
  label="WhatsApp"
/>

<SocialIcon
  icon={<Linkedin />}
  href="https://linkedin.com/in/sujal-kumar"
  label="LinkedIn"
/>

        </div>
        <p className="mt-4 text-gray-500">
          © {new Date().getFullYear()} Sujal Kumar
        </p>
      </footer>
    </div>
  )
}

/* -------------------- COMPONENTS -------------------- */

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  site,
  url,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <Image src={image} alt={title} width={400} height={200} />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="flex gap-2 mt-3">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs bg-purple-600 px-2 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <a href={site} target="_blank">Live Demo</a>
        <a href={url} target="_blank">Post</a>
      </div>
    </div>
  )
}
