import Navbar from "@/components/shared/Navbar";
import ThemeToggle from "@/components/shared/theme-toggle";


export default function Home() {
  return (
    <>
    <Navbar />
    <main className="p-10">
      <h1 className="text-3xl font-bold">Md Tanvir Rahman</h1>
      <ThemeToggle />
    </main>
    </>
  )
}