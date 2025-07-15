import DivForms from "@/components/DivForms";
import FormCreateList from "@/components/forms/FormCreateList";
import { Card, CardContent } from "@/components/ui/card";
import DashboardLayout from "@/layout/DashboardLayout";

function PageCreateList() {
    return (
        <DashboardLayout>
            <Card className="m-auto lg:w-[700px]">
                <CardContent>
                    <DivForms title="Cria agora mesmo sua lista!">
                        <FormCreateList />
                    </DivForms>
                </CardContent>
            </Card>
        </DashboardLayout>
    );
}
export default PageCreateList;
