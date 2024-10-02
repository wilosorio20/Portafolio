import { TitleSecondary } from "@/components/atoms/text";
import EducationCard from "@/components/molecules/card";
import { education } from "@/utils/const";
import { Icon } from "@iconify/react";
import React from "react";

const Education = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mx-auto">
      <div className="flex items-center pb-10 space-x-2">
          <TitleSecondary title="Educación"></TitleSecondary>
          <Icon icon="heroicons-outline:academic-cap" className="text-primary h-10 w-10" />
        </div>

        <div className="flex items-center justify-center bg-white w-full px-10 py-8">
          <ul className="w-full">
            {education.map((el, index) => (
              <li key={el.institution}>
                <EducationCard
                  institution={el.institution}
                  title={el.title}
                  situationAcademic={el.situationAcademic}
                  description={el.description}
                  date={el.date}
                />
                {index !== education.length - 1 && <hr className="my-5" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
// Este componente presenta una lista de las instituciones educativas donde se ha cursado formación, mostrando cada una en un 'EducationCard'. Cada tarjeta incluye detalles como la institución, título, situación académica, descripción y fecha. La sección se introduce con un título y un ícono relacionado con la educación.