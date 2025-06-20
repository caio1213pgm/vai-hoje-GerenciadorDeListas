type ButtonSubmitProps = {
  text: string;
}
function ButtonSubmit({text}: ButtonSubmitProps) {
  return (
    <button
      type="submit"
      className="bg-gray-800 text-white text-xl px-7 py-1 rounded border-2 border-gray-600 hover:bg-gray-600 transition-colors cursor-pointer"
    >
      {text}
    </button>
  );
}
export default ButtonSubmit;
