import { Link } from "react-router";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

type DivFormsProps = {
    children: React.ReactNode;
    title: string;
    link?: string;
    linkText?: string;
};
function DivForms({ children, title, link, linkText }: DivFormsProps) {
    return (
        <Card>
            <CardTitle>
                <h1 className="text-xl text-center">{title}</h1>
            </CardTitle>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <Link
                    to={link ? link : ""}
                    className="text-blue-400 font-medium m-auto"
                >
                    {linkText}
                </Link>
            </CardFooter>
        </Card>
    );
}
export default DivForms;
