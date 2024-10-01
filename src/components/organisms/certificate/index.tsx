import { TitleSecondary } from "@/components/atoms/text";
import CertificateCard from "@/components/molecules/certificateCard";
import { certification } from "@/utils/const";
import { Icon } from "@iconify/react";
import React from "react";

const Certificate = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center mx-auto">
      <div className="flex items-center pb-10 space-x-1">
          <TitleSecondary title="Certificaciones"></TitleSecondary>
          <Icon icon="mingcute:certificate-2-line" className="text-primary h-10 w-10" />
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