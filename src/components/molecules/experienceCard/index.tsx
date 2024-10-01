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