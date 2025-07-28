import { FaRegCopyright } from "react-icons/fa";
function Footer(){
    return( 
        <footer className="bg-gray-900 h-[82px]">
            <div className="flex items-center justify-center md:justify-between md:px-6 h-full w-full">
                <div className="flex items-center gap-2 text-white font-medium">
                    <h1 className="md:text-xl">Vai hoje - Todos os direitos reservados</h1>
                    <FaRegCopyright/>
                </div>
            </div>
        </footer>
    )
}
export default Footer;