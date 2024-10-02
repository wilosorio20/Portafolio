import React, { useState } from "react";
import { Icon } from "@iconify/react"; // Importa un ícono desde la librería Iconify
import CustomIcon from "@/components/atoms/icon"; // Importa un componente de ícono personalizado
import { TextSecundary, TitleTertiaryCenter } from "../text"; // Importa componentes de texto

// Componente Button que gestiona un botón interactivo y un modal
const Button = () => {
  // Estado 'isOpen' para controlar si el modal está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la apertura/cierre del modal
  const toggleDialog = () => {
    setIsOpen(!isOpen); // Invierte el valor actual de 'isOpen'
  };

  return (
    <>
      <button
        className="color-primary py-5 px-8 w-64 text-white font-bold text-lg rounded-md shadow-xl hover:opacity-70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
        onClick={toggleDialog}
      >
        ¡CONTÁCTAME!
        <Icon icon="majesticons:arrow-right" className="ms-2" />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="flex flex-col bg-white p-8 rounded-md shadow-lg max-w-md w-full gap-4">
            <TitleTertiaryCenter title="¡Gracias por visitarme!" />
            <TextSecundary text="Si tienes alguna duda o quieres contactarme, puedes enviarme un mensaje o encontrarme en mis redes sociales." />
            <div className="flex space-x-1 justify-center">
              <CustomIcon icon="mdi:gmail" href="mailto:wilosorio04@gmail.com" />
              <CustomIcon
                icon="akar-icons:linkedin-fill"
                href="https://www.linkedin.com/in/wilmar-andres-osorio-usuga/"
              />
            </div>
            <button
              onClick={toggleDialog}
              className="py-2 px-4 bg-primary text-white rounded-md"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;

// Este componente renderiza un botón que al ser clicado abre un modal con información de contacto y enlaces a redes sociales. El modal se puede cerrar volviendo a hacer clic en el botón "Cerrar".