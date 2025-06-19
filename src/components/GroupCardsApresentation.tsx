import CardApresentation from "./CardApresentation";

function GroupCardsApresentation() {
    return (
        <div className="flex flex-wrap gap-5 justify-center h-full py-5 md:pt-15">
        <CardApresentation
          title="Qual o nosso propósito"
          description="O Vai Hoje? nasceu com a missão de simplificar a vida dos brasileiros, proporcionando uma experiência de organização de eventos única e inovadora."
        />
        <CardApresentation
          title="Como começar?"
          description="Faça o seu login ou crie uma conta e a partir daí você já pode criar suas listas para os seus eventos e compartilhar com seus amigos."
        />
        <CardApresentation
          title="Funcionalidades"
          description="O Vai Hoje? tem como funcionalidades a criação de eventos, compartilhamento, cadastro de pessoas e muito mais."
        />
      </div>
    )
}
export default GroupCardsApresentation;