import React from "react";

// Componente que renderiza un título principal en negro, alineado a la izquierda
const TitlePrincipal = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-5xl text-left text-black">{title}</h1>;
};

// Componente que renderiza un título principal en color primario, alineado a la izquierda
const TitlePrincipalColor = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-5xl text-left text-primary">{title}</h1>;
};

// Componente que renderiza un título secundario en negro, centrado
const TitleSecondary = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-2xl text-center text-black">{title}</h1>;
};

// Componente que renderiza un título terciario en negro, alineado a la izquierda
const TitleTertiary = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-left text-black text-lg">{title}</h1>;
};

// Componente que renderiza un título terciario en negro, centrado
const TitleTertiaryCenter = ({ title }: { title: string }) => {
  return <h1 className="font-bold text-center text-black text-lg">{title}</h1>;
};

// Componente que renderiza un párrafo de texto principal en gris, alineado a la izquierda
const TextPrincipal = ({ text }: { text: string }) => {
  return <p className="text-appGray text-left text-base">{text}</p>;
};

// Componente que renderiza un párrafo de texto secundario en gris, centrado
const TextSecundary = ({ text }: { text: string }) => {
  return <p className="text-appGray text-center text-base">{text}</p>;
};

// Componente que renderiza un texto terciario en blanco, alineado a la izquierda
const TextTertiary = ({ text }: { text: string }) => {
  return <h1 className="text-left text-white text-sm">{text}</h1>;
};

export {
  TitlePrincipal,
  TitlePrincipalColor,
  TitleSecondary,
  TitleTertiary,
  TitleTertiaryCenter,
  TextPrincipal,
  TextSecundary,
  TextTertiary,
};

// Este archivo exporta múltiples componentes de título y texto que difieren en estilo y alineación. Los componentes permiten reutilizar elementos tipográficos con diferentes niveles de jerarquía (principal, secundario, terciario) y colores, ya sea para títulos o párrafos de texto.