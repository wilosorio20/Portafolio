import { TextSecundary, TitleSecondary } from "@/components/atoms/text";
import ExperienceCard from "@/components/molecules/experienceCard";
import { experience } from "@/utils/const";
import React from "react";

const Experience = () => {
  return (
    <div className="py-10 ">
      <div className="flex flex-col items-center mx-auto">
        <TitleSecondary title="Experiencia laboral"></TitleSecondary>
        <div className="w-96 pt-4 pb-10">
          <TextSecundary text="." />
        </div>

        <div className="flex items-center justify-center bg-white w-full px-10 py-8">
          <ul className="w-full">
            {experience.map((el, index) => (
              <li key={el.company}>
                <ExperienceCard
                  company={el.company}
                  position={el.position}
                  description={el.description}
                  date={el.date}
                />
                {index !== experience.length - 1 && <hr className="my-5" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;