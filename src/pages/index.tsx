import Certificate from "@/components/organisms/certificate";
import Education from "@/components/organisms/education";
import Header from "@/components/organisms/header";
import Knowledge from "@/components/organisms/knowledge";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Knowledge />
      <Education />
      <Certificate />
      </div>
  );
}