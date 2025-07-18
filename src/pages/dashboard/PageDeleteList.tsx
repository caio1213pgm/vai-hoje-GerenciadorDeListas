import DashboardLayout from "@/layout/DashboardLayout";
import { useEffect, useState } from "react";
import type { listProps } from "./PageViewMyLists";
import { useAuth } from "@/context/AuthContext";
import { getListsByUid } from "@/lib/getListsByUid";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Link } from "react-router";
import CardLoading from "@/components/CardLoading";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";

function PageDeleteList() {
    const { user } = useAuth();
    const [myLists, setMyLists] = useState<listProps[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getLists() {
            if (!user) {
                return;
            }
            const lists = await getListsByUid(user.uid);
            setMyLists(lists);
            setLoading(false);
        }
        getLists();
    });

    if (loading) return <CardLoading />;
    return (
        <DashboardLayout>
            <h1></h1>
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
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {myLists.map((list) => (
                            <TableRow key={list.id} className="">
                                <TableCell className="text-center">
                                    <Tooltip>
                                        <TooltipTrigger >
                                            <Link
                                                to={`http://localhost:5173/myList/${list.id}`}
                                                className="hover:underline "
                                            >
                                                {list.title}
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Clique para deletar lista</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="text-center">
                                    {list.people_list.length}
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
export default PageDeleteList;
