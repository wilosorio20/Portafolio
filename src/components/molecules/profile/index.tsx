import { TextPrincipal, TitleTertiary } from "@/components/atoms/text";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center xl:p-5 gap-2">
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
      <hr />
      <div className="flex w-full justify-between">
        <div className="flex items-start">
        <TextPrincipal text="Edad " />
        </div>
        <div className="flex items-end">
        <TextPrincipal text=" 21 años" />
        </div>
      </div>
    </div>
  );
};

export default Profile;