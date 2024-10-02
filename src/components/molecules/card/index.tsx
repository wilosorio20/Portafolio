import React from "react";
import {
  TextPrincipal,
  TextTertiary,
  TitleTertiary,
} from "@/components/atoms/text"; // Importa los componentes de texto

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

export default EducationCard; // Exporta el componente EducationCard como exportación por defecto

// El componente EducationCard renderiza una tarjeta de educación, dividiéndola en dos secciones: 
// 1. La primera columna muestra el nombre de la institución, la situación académica y la fecha. 
// 2. La segunda columna muestra el título académico y una breve descripción de la experiencia educativa.
