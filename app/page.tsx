import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Home";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
    </main>
  )
}
