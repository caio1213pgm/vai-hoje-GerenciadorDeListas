import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import CardListMenu from "./CardListMenu";
import { useNavigate } from "react-router";

type CardListProps = {
    title: string;
    description?: string;
    id: string;
    sizeList: number;
};

function CardList({ title, description, id, sizeList }: CardListProps) {
    const navigate = useNavigate();
    return (
        <Card
            className="hover:scale-105 duration-150"
            onClick={() => navigate(`/myList/${id}`)}
        >
            <CardContent className="cursor-pointer hover:scale-105 duration-150">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 bg-repeat-x w-70 h-35 rounded"></div>
            </CardContent>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <p>{title}</p>
                    <p className="text-gray-500">{sizeList}</p>
                </CardTitle>
                {description ? (
                    <CardDescription className="flex justify-between items-center">
                        <p className="max-w-50 overflow-hidden text-ellipsis whitespace-nowrap">
                            {description}
                        </p>
                        <CardListMenu id={id} />
                    </CardDescription>
                ) : (
                    <CardDescription className="flex justify-between items-center">
                        <p>{description}</p>
                        <CardListMenu id={id} />
                    </CardDescription>
                )}
            </CardHeader>
        </Card>
    );
}

export default CardList;
