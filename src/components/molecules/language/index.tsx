import ProgressBar from "@/components/atoms/progressBar";
import { TitleTertiary } from "@/components/atoms/text";
import React from "react";

const Language = () => {
  return (
    <div className="flex flex-col px-5 gap-4">
      <TitleTertiary title="Idiomas" />
      <div className="flex flex-col gap-1">
        <ProgressBar text="Español" progress="100" />
        <ProgressBar text="Inglés" progress="65" />
        <ProgressBar text="Sueco" progress="20" />
        <ProgressBar text="Japones" progress="30" />
      </div>
    </div>
  );
};

export default Language;

// Este componente presenta una sección titulada "Idiomas", que muestra una lista de idiomas junto con barras de progreso que indican el nivel de habilidad en cada idioma. Cada barra de progreso es un componente separado que visualiza el dominio del idioma correspondiente.