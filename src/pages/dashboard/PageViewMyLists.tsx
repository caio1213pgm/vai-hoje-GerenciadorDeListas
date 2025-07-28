import CardList from "@/components/CardList";
import CardLoading from "@/components/CardLoading";
import { useAuth } from "@/context/AuthContext";
import DashboardLayout from "@/layout/DashboardLayout";
import { getListsByUid } from "@/lib/getListsByUid";
import { useEffect, useState } from "react";

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
            {myLists && myLists.length > 0 ? (
                <div className="flex flex-wrap md:px-10 md:gap-8 gap-3 items-center justify-center py-5">
                    {myLists.map((list) => (
                        <CardList
                            title={list.title}
                            description={list.description}
                            id={list.id}
                            sizeList={list.people_list.length}
                        />
                    ))}
                </div>
            ) : (
                <div className="m-auto">
                    <h1 className="text-xl flex">
                        Parece que você ainda não criou nenhuma lista...
                    </h1>
                </div>
            )}
        </DashboardLayout>
    );
}
export default PageViewMyLists;
