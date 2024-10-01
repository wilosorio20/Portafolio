import { TextPrincipal, TitleTertiary } from "@/components/atoms/text";
import Icon from "@/components/atoms/icon";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    
      <div className="flex flex-col items-center gap-1 p-5">
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
        <TitleTertiary title="Wilmar Osorio" />
        <TextPrincipal text="Desarrollador Back-end" />
        <div className="flex space-x-1">
          <Icon icon="akar-icons:github-fill" href="https://github.com/wil101" />
          <Icon icon="akar-icons:linkedin-fill" href="https://www.linkedin.com/in/wilmar-andres-osorio-usuga/" />
        </div>
      </div>
      
    
  );
};

export default Profile;