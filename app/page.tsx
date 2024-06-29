import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import { Approach } from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/#home', icon: <FaHome />},
          {name: 'About', link: '/#about', icon: <FaHome />},
          {name: 'Projects', link: '/#projects', icon: <FaHome />},
          {name: 'Approach', link: '/#approach', icon: <FaHome />}
        ]} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
