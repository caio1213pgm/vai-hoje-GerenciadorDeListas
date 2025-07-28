import { Button } from "../ui/button";
type ButtonIconsProps = {
    children: React.ReactNode;
    action?: () => void;
};
function ButtonIcons({ children, action }: ButtonIconsProps) {
    return (
        <Button variant="outline" type="button" size="icon" onClick={action}>
            {children}
        </Button>
    );
}

export default ButtonIcons;
