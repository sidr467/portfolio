import Profile from "./components/Profile"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"

export default function Home() {
  return (
    <main className="px-4 py-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 flex flex-col gap-12 md:gap-24">
      <Profile />
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
    </main>
  )
}
