import { TextSecundary, TitleSecondary } from "@/components/atoms/text";
import Card from "@/components/molecules/card";
import { knowledge } from "@/utils/const";
import React from "react";

const Knowledge = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center w-[70%] mx-auto">
        <TitleSecondary title="Mi conocimiento"></TitleSecondary>
        <div className="w-96 pt-4 pb-10">
          <TextSecundary text="Soy Desarrollador Full Stack con experiencia en Java, Springboot, Angular, React, Node.js, Next.js y PHP, creando aplicaciones web y soluciones en la nube. Apasionado por la ciberseguridad y la infraestructura cloud, me destaco por desarrollar proyectos escalables y seguros." />
        </div>

        <div className="flex items-center justify-center">
          <ul className="flex flex-row">
            {knowledge.map((el) => (
              <li key={el.title} className="h-80 w-1/3 mx-2">
                <Card icon={el.icon} title={el.title} text={el.text} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;