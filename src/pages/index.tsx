import Certificate from "@/components/organisms/certificate";
import Education from "@/components/organisms/education";
import Experience from "@/components/organisms/experience";
import Header from "@/components/organisms/header";
import Knowledge from "@/components/organisms/knowledge";
import Portfolio from "@/components/organisms/portfolio";
import SideBar from "@/components/organisms/sidebar";


export default function Home() {
  return (
    <div className="w-full h-screen flex flex-row space-x-5 p-5 overflow-hidden">
      <div className="w-1/4 h-full overflow-y-auto">
        <SideBar />
      </div>
      <div className="w-3/4 h-full overflow-y-auto">
        <Header />
        <Experience />
        <Portfolio />
        <Knowledge />
        <Certificate />
        <Education />
      </div>
    </div>
  );
}