import { TextPrincipal, TextTertiary, TitleTertiary } from "@/components/atoms/text";

const ExperienceCard = ({
    company,
    position,
    description,
    date,
  }: {
    company: string;
    position: string;
    description: string;
    date: string;
  }) => {
    return (
      <div className="flex flex-row">
        <div className="flex flex-col gap-5 w-2/5">
          <TitleTertiary title={company} />
          <div className="color-primary py-1 px-3 max-w-max">
            <TextTertiary text={date} />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-3/5">
          <TitleTertiary title={position} />
          <TextPrincipal text={description} />
        </div>
      </div>
    );
  };

  export default ExperienceCard;

  // Este componente representa una tarjeta de experiencia laboral que muestra el nombre de la empresa, el título del puesto, una descripción de las responsabilidades y la fecha en que se ocupó dicho puesto. La información está organizada en dos columnas: una para los detalles de la empresa y la fecha, y otra para el título del puesto y la descripción.