import { TextSecundary } from "@/components/atoms/text";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-white flex justify-center items-center">
      <TextSecundary text="© 2024 Wilmar Andres Osorio Usuga. Todos los derechos reservados." />
    </footer>
  );
};

export default Footer;

// Este componente representa el pie de página de la aplicación. Incluye un mensaje de derechos de autor y se centra horizontalmente en la parte inferior de la página.