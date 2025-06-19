type CardApresentationProps = {
  title: string;
  description: string;
};

function CardApresentation({ title, description }: CardApresentationProps) {
  return (
    <div className=" bg-gray-700 w-[250px] p-2 rounded-xl border-4 border-gray-600 hover:scale-105 duration-150 md:py-10 md:w-[400px]">
      <h1 className="text-center text-white font-medium text-xl md:text-2xl">{title}</h1>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
}

export default CardApresentation;
