import React from "react";
import { Icon } from "@iconify/react";

const Index = ({ icon, href }: { icon: string, href: string }) => {
  return (
    <div className="h-8 w-8 rounded-full color-primary flex justify-center items-center shadow-2xl">
      <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="h-4 w-4 text-white" icon={icon} />
  </a>
    </div>
  );
};

export default Index;

// Este componente renderiza un ícono dentro de un enlace que dirige a la URL recibida por 'href'. El ícono se muestra en un contenedor circular con estilos y sombra, y el enlace se abre en una nueva pestaña.