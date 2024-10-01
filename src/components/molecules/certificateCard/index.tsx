import { Icon } from "@iconify/react";
import React from "react";
import {
  TextPrincipal,
  TextTertiary,
  TitleTertiary,
} from "@/components/atoms/text";

const CertificateCard = ({
  icon,
  platform,
  title,
  description,
  date,
}: {
  icon: string;
  platform: string;
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-5 w-2/5">
        <div className="flex flex-row space-x-4 ">
          <Icon icon={icon} width="40" height="40" />
          <TitleTertiary title={platform} /></div>
        <div className="flex flex-row space-x-4 items-center">
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