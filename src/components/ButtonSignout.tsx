type signoutProps = {
  onSignout: () => void;
}

function ButtonSignout({ onSignout }: signoutProps) {
  return (
    <button className="bg-red-600 px-7 py-3 text-xl text-white border-2 border-red-700 font-medium rounded hover:bg-red-700 cursor-pointer duration-200"
    onClick={onSignout}>
      Sair da conta
    </button>
  );
}
export default ButtonSignout;
