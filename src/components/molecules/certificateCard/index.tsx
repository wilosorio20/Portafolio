import React from "react";
import {
  TextPrincipal,
  TextTertiary,
  TitleTertiary,
} from "@/components/atoms/text";

const CertificateCard = ({
  platform,
  title,
  situation,
  description,
  date,
}: {
  platform: string;
  title: string;
  situation: string;
  description: string;
  date: string;
}) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-5 w-2/5">
        <TitleTertiary title={platform} />
        <div className="flex flex-row space-x-4 items-center">
          <TextPrincipal text={situation} />
          <div className="color-primary py-1 px-3">
            <TextTertiary text={date} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-3/5">
        <TitleTertiary title={title} />
        <TextPrincipal text={description} />
      </div>
    </div>
  );
};

export default CertificateCard;