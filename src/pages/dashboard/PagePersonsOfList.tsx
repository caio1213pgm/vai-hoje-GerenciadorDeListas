import DashboardLayout from "@/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { person } from "./PageViewMyLists";
import { getPersonsByIdList } from "@/lib/getPersonsByIdList";
import CardLoading from "@/components/CardLoading";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

function PersonsOfList() {
    const { idList } = useParams();
    const [personsList, setPersonsList] = useState<person[] | null>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchPersons() {
            if (!idList) {
                return;
            }
            const persons = await getPersonsByIdList(idList);
            setPersonsList(persons);
            setLoading(false);
        }

        fetchPersons();
    });

    if (loading) return <CardLoading />;

    return (
        <DashboardLayout>
            {personsList ? (
                <Table>
                    <TableHeader>
                        <TableRow className="lg:text-xl">
                            <TableHead className="">Nome</TableHead>
                            <TableHead className="">Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {personsList.map((person) => (
                            <TableRow className="">
                                <TableCell>{person.name}</TableCell>
                                <TableCell>{person.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow >
                            <TableCell>
                                Qntd de pessoas da sua lista:
                            </TableCell>
                            <TableCell>
                                {personsList.length}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                    <TableCaption>Pessoas inscritas na sua lista</TableCaption>
                </Table>
            ) : (
                <h1 className="text-center">Não foi possível encontrar a sua lista</h1>
            )}
        </DashboardLayout>
    );
}

export default PersonsOfList;
