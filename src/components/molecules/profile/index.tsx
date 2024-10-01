import { TextPrincipal, TitleTertiary } from "@/components/atoms/text";
import Icon from "@/components/atoms/icon";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center gap-2">
        <div className="flex justify-center items-center w-40 h-40 bg-primary rounded-full">
          <div className="h-[168px] mb-2">
            <Image
              src="/image/img1.jpg"
              alt="Wilmar Andres Osorio Usuga"
              width={250}
              height={250}
              className="rounded-lg h-full"
            />
          </div>
        </div>
        <TitleTertiary title="Wilmar Andres Osorio Usuga" />
        <TextPrincipal text="Desarrollador Back-end" />
        <div className="flex space-x-1">
          <Icon icon="akar-icons:github-fill" href="https://github.com/wil101" />
          <Icon icon="akar-icons:linkedin-fill" href="https://www.linkedin.com/in/wilmar-andres-osorio-usuga/" />
        </div>
      </div>
      <hr className="my-5" />
      <div>
        <div className="flex w-full justify-between">
          <div className="flex items-start">
            <TextPrincipal text="Edad:" />
          </div>
          <div className="flex items-end">
            <TextPrincipal text="21 años" />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-start">
            <TextPrincipal text="Correo:" />
          </div>
          <div className="flex items-end">
            <TextPrincipal text="wilosorio04@gmail.com" />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-start">
            <TextPrincipal text="Ciudad:" />
          </div>
          <div className="flex items-end">
            <TextPrincipal text="Medellín, Colombia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;