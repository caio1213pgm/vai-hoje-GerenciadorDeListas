import { Link } from "react-router";

type DivFormsProps = {
  children: React.ReactNode;
  title: string;
  link: string;
  linkText: string;
};
function DivForms({ children, title, link, linkText }: DivFormsProps) {
  return (
    <div className="pt-20 pb-7 flex flex-col items-center justify-center gap-4">
      <h1 className="text-white text-xl">{title}</h1>
      {children}
      <Link to={link} className="text-blue-400 font-medium">
        {linkText}
      </Link>
    </div>
  );
}
export default DivForms;
