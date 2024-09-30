import React from "react";
import { Icon } from "@iconify/react";
import {
  TextPrincipal,
  TextSecundary,
  TextTertiary,
  TitleTertiary,
  TitleTertiaryCenter,
} from "@/components/atoms/text";

const KnowledgeCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white h-full p-8">
      <Icon className="text-primary w-16 h-16" icon={icon} />
      <TitleTertiaryCenter title={title} />
      <TextSecundary text={text} />
    </div>
  );
};

const EducationCard = ({
  institution,
  title,
  situationAcademic,
  description,
  date,
}: {
  institution: string;
  title: string;
  situationAcademic: string;
  description: string;
  date: string;
}) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-5 w-2/5">
        <TitleTertiary title={institution} />
        <div className="flex flex-row space-x-4 items-center">
          <TextPrincipal text={situationAcademic} />
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

export { KnowledgeCard, EducationCard };