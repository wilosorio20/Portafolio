import Button from "@/components/atoms/button";
import { TextPrincipal, TitlePrincipal, TitlePrincipalColor } from "@/components/atoms/text";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center h-[470px]  space-x-4 bg-white px-12">
      <div className="flex flex-col gap-8 w-3/4">
        <div>
          <TitlePrincipal title="Soy Wilmar Osorio" />
          <div className="flex space-x-4">
            <TitlePrincipal title="Desarrollador" />
            <TitlePrincipalColor title="Back-end" />
          </div>
        </div>
        <div className="w-5/6">
          <TextPrincipal text="Soy un Desarrollador Back-end con experiencia en la construcción de aplicaciones utilizando tecnologías modernas como Angular, React, Next, Tailwind, TypeScript, Java, Springboot, Laravel, PHP y AWS " />
        </div>
        <Button />
      </div>
      <div className="w-1/4">
        <Image
          src="/image/CVfoto.jpg"
          alt="Wilmar Andres Osorio Usuga"
          width={250}
          height={450}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Header;