
import Certificate from "@/components/organisms/certificate";
import Education from "@/components/organisms/education";
import Experience from "@/components/organisms/experience";
import Header from "@/components/organisms/header";
import Knowledge from "@/components/organisms/knowledge";
import SideBar from "@/components/organisms/sidebar";


export default function Home() {
  return (
    <div className="w-full flex flex-row space-x-5 p-5">
      <div className="w-1/4">
      <SideBar />
    </div>
    <div className="w-3/4">
      <Header />
      <Knowledge />
      <Education />
      <Certificate />
      <Experience />
    </div>
    </div>
  );
}