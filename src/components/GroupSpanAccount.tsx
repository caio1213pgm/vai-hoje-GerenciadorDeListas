import type { User } from "firebase/auth";
import SpanAccount from "./SpanAccount";

function GroupSpanAccount({user}: {user: User | null | undefined}) {
    return(
        <>
         <SpanAccount
            title="Nome de usuário"
            informations={user?.displayName}
          />
          <SpanAccount title="Email" informations={user?.email} />
          <SpanAccount
            title="Criação da conta"
            informations={user?.metadata.creationTime}
          />
        </>
    )
}
export default GroupSpanAccount;