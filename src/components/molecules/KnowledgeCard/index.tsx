import React from "react";
import { Icon } from "@iconify/react";
import {
  TextSecundary,
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

export default KnowledgeCard;

// Este componente muestra una tarjeta de conocimiento que incluye un ícono, un título y un texto descriptivo. Está diseñado para presentar habilidades o conocimientos de manera visual y clara, centrando el contenido en una disposición vertical.