import { Card, CardContent, CardTitle } from "./ui/card";

type CardApresentationProps = {
    title: string;
    description: string;
};

function CardApresentation({ title, description }: CardApresentationProps) {
    return (
        <Card className="hover:scale-105 duration-150">
            <CardTitle>
                <h1 className="text-center text-2xl">{title}</h1>
            </CardTitle>
            <CardContent>
                <p className="text-center ">{description}</p>
            </CardContent>
        </Card>
    );
}

export default CardApresentation;
