import { toast } from "sonner";

type onCopyLinkProps = {
  listId: string;
};

export function onCopyLink({ listId }: onCopyLinkProps) {
  const copyUrl = `${import.meta.env.VITE_BASE_URL}/lists/${listId}`;
  navigator.clipboard.writeText(copyUrl);
  toast("Link copiado para área de tranferência");
}
