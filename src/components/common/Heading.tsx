const Heading = ({
  title,
  subTitle,
  customStyle,
}: {
  title: string;
  subTitle: string;
  customStyle?: string;
}) => {
  return (
    <div className="mb-6">
      <h1
        className={`text-2xl font-bold leading-8 text-primary-foreground mb-2 ${customStyle}`}
      >
        {title}
      </h1>
      <p className="text-base leading-6 text-[#566267]">{subTitle}</p>
    </div>
  );
};

export default Heading;
