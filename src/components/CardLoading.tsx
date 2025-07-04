function CardLoading() {
  return (
    <div className="flex gap-4 p-4 items-center justify-center my-auto">
      <div className="py-4 px-4 bg-gray-300 animate-pulse rounded-lg md:w-1/4 text-black text-2xl font-medium text-center">
        <p>Carregando...</p>
      </div>
    </div>
  );
}
export default CardLoading;
