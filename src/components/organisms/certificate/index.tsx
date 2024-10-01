import { TextSecundary, TitleSecondary } from "@/components/atoms/text";
import CertificateCard from "@/components/molecules/certificateCard";
import { certification } from "@/utils/const";
import React from "react";

const Certificate = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mx-auto">
        <TitleSecondary title="Certificaciones"></TitleSecondary>
        <div className="w-96 pt-4 pb-10">
          <TextSecundary text="Certificaciones que fortalecen mi conocimiento" />
        </div>

        <div className="flex items-center justify-center bg-white w-full px-10 py-8">
          <ul className="w-full">
            {certification.map((el, index) => (
              <li key={el.platform}>
                <CertificateCard
                  icon = {el.icon}
                  platform={el.platform}
                  title={el.title}
                  description={el.description}
                  date={el.date}
                />
                {index !== certification.length - 1 && <hr className="my-5" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certificate;