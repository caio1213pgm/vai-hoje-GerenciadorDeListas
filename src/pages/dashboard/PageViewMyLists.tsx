import ButtonCopy from "@/components/buttons/ButtonCopy";
import CardLoading from "@/components/CardLoading";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from "@/context/AuthContext";
import DashboardLayout from "@/layout/DashboardLayout";
import { getListsByUid } from "@/lib/getListsByUid";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export type person = {
    name: string;
    email: string;
    presence: boolean;
};

export type listProps = {
    id: string;
    user_id: string;
    title: string;
    description: string;
    people_list: person[];
};

function PageViewMyLists() {
    const [myLists, setMyLists] = useState<listProps[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const { user } = useAuth();

    useEffect(() => {
        async function loadingMyLists() {
            if (!user) {
                return;
            }
            const listsUser = await getListsByUid(user.uid);
            setMyLists(listsUser);
            setLoading(false);
        }

        loadingMyLists();
    });

    if (loading) return <CardLoading />;

    return (
        <DashboardLayout>
            {myLists ? (
                <Table>
                    <TableHeader>
                        <TableRow className="lg:text-xl text-center">
                            <TableHead className="text-center">
                                Nome da lista
                            </TableHead>
                            <TableHead className="text-center">
                                Qntd de inscritos
                            </TableHead>
                            <TableHead className="text-center">
                                Link de inscrição
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {myLists.map((list) => (
                            <TableRow key={list.id} className="">
                                <TableCell className="text-center">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link
                                                to={`http://localhost:5173/myList/${list.id}`}
                                                className="hover:underline "
                                            >
                                                {list.title}
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                Clique para ver as incrições da
                                                lista
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="text-center">
                                    {list.people_list.length}
                                </TableCell>
                                <TableCell className="lg:flex hidden items-center gap-2 justify-center">
                                    <Link
                                        className=" text-blue-400 hover:underline "
                                        to={`http://localhost:5173/lists/${list.id}`}
                                    >
                                        {`http://localhost:5173/lists/${list.id}`}
                                    </Link>

                                    <ButtonCopy listId={list.id} />
                                </TableCell>
                                <TableCell className="lg:hidden gap-2">
                                    <Link
                                        className=" underline "
                                        to={`http://localhost:5173/lists/${list.id}`}
                                    >
                                        Ir para inscrição
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableCaption>Minhas Lista</TableCaption>
                </Table>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome da lista</TableHead>
                            <TableHead>Qntd de inscritos</TableHead>
                            <TableHead>Link de inscrição</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody></TableBody>
                    <TableCaption>
                        Listas não encontradas ou você ainda não criou listas
                    </TableCaption>
                </Table>
            )}
        </DashboardLayout>
    );
}
export default PageViewMyLists;
