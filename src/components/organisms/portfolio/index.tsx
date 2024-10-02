import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { projects } from "@/utils/const";
import { Navigation, Pagination } from "swiper/modules";
import { TextPrincipal, TextSecundary, TitleSecondary, TitleTertiary } from "@/components/atoms/text";
import { Icon } from "@iconify/react";

interface ModalProps {
    imageUrl: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
            <div className="relative bg-white p-6">
                <Image src={imageUrl} alt="Imagen ampliada" width={550} height={475} className="rounded-lg" />
                <button className="absolute top-2 right-2 text-black " onClick={onClose} title="Close">
                    <Icon icon="material-symbols:close" />
                </button>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="w-full pb-10">
            <div className="flex flex-col gap-4 w-3/5 mx-auto">
                <div className="flex justify-center items-center space-x-2">
                    <TitleSecondary title="Portafolio"></TitleSecondary>
                    <Icon icon="fluent:briefcase-28-regular" className="text-primary h-10 w-10" />
                </div>
                <TextSecundary text="Todos los proyectos son propiedad de la empresa Evertec donde se trata con data muy delicado por ende solo se puede mostrar imagen del PowerBI." />
            </div>
            <div className="pt-10">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="w-full h-full p-4 bg-white shadow-lg flex flex-col gap-4">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    layout="responsive"
                                    className="rounded-lg object-cover cursor-pointer"
                                    onClick={() => handleImageClick(project.imageUrl)}
                                />
                                <TitleTertiary title={project.title} />
                                <TextPrincipal text={project.description} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {selectedImage && <Modal imageUrl={selectedImage} onClose={handleCloseModal} />}
        </div>
    );
};

export default Portfolio;

// Este componente muestra un portafolio de proyectos utilizando un carrusel de imágenes. 
// Al hacer clic en una imagen, se abre un modal que muestra la imagen ampliada. 
// También incluye un título y una descripción general sobre la naturaleza de los proyectos,
// resaltando que son propiedad de la empresa Evertec y que sólo se pueden mostrar imágenes de PowerBI.