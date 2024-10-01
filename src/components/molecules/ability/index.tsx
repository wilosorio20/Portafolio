import ProgressBar from "@/components/atoms/progressBar";
import { TitleTertiary } from "@/components/atoms/text";
import React from "react";

const Programming = () => {
    return (
      <div className="flex flex-col px-5 gap-4">
        <TitleTertiary title="Lenguajes de Programación y Herramientas" />
        <div className="flex flex-col gap-1">
          <ProgressBar text="Angular" progress="50" />
          <ProgressBar text="React" progress="40" />
          <ProgressBar text="Next" progress="40" />
          <ProgressBar text="TypeScript" progress="45" />
          <ProgressBar text="HTML" progress="90" />
          <ProgressBar text="CSS" progress="70" />
          <ProgressBar text="Bootstrap" progress="30" />
          <ProgressBar text="Java" progress="50" />
          <ProgressBar text="Tailwind" progress="50" />
          <ProgressBar text="Git" progress="80" />
          <ProgressBar text="PHP" progress="30" />
          <ProgressBar text="SQL" progress="60" />
        </div>
      </div>
    );
  };

export default Programming;