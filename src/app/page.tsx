"use client"

import Profile from "./components/Profile"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Loading from "./loading"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Change the delay as needed

    return () => clearTimeout(timer)
  }, [])
  if (loading) {
    return <Loading />
  }

  return (
    <main className="px-4 py-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 flex flex-col gap-12 md:gap-24">
      <NavBar />
      <Profile />
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Footer />
    </main>
  )
}
