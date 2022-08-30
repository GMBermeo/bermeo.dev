import { Subtitle } from "../components/ui/Subtitle";
import { Title } from "../components/ui/Title";
import type { NextPage } from "next";

const AGU: NextPage = () => {
  return (
    <>
      <main className="container mx-auto max-w-3xl px-6 sm:px-8">
        <Title title={"Advocacia-Geral da União"} />
        <Subtitle title={"Escola AGU App"} />
        <article className="customContainer">
          Este projeto começou como um protótipo de alta fidelidade feito em uma
          tecnologia experimental da Microsoft chamada de Power Apps, para o
          futuro desenvolvimento de um aplicativo móvel desenvolvido em React
          Native. Com 6 meses de projeto, o protótipo estava com tamanha
          fidelidade, conectado ao banco de dados MySQL, que fora decidido
          utilizar-se o protótipo como aplicativo final. A plataforma não era
          feita para suportar os 11.000 membros presentes na Advocacia-Geral da
          União que poderiam utilizar o app para se inscrever em eventos, cursos
          e palestras, mas com a utilização de views e filtragem prévia
          conseguimos lançar com sucesso. O lançamento foi noticiado em veículos
          especializados e em 2021 o aplicativo contava com 4 mil usuários
          ativos, e cerca de 500 acessos simultâneos diários.
        </article>
        <Subtitle title={"Unio"} />
        <article className="customContainer">
          A Advocacia-Geral da União possui cerca de 48 sistemas em uso, a
          maioria deles, com o mesmo código-fonte em asp desde os anos 90. O
          Unio é um projeto de longo prazo de re-escrever todos esses sistemas
          em uma plataforma única, utilizando-se da infraestrutura do principal
          software do orgão, o SAPIENS.
        </article>
        <Subtitle title={"SAD.Atende"} />
        <article className="customContainer">
          Projeto de customização de Sistema de Gestão de Serviços para
          padronização de acordo com identidade visual do orgão. Em uma equipe
          de duas pessoas, cuidei do front-end (html, css e javascript) chegando
          a confeccionar 261 imagens únicas como forma de trabalhar em torno das
          limitações do sistema base.
        </article>
        <Subtitle title={"Sistema de Gestão de Visitas"} />
        <article className="customContainer">
          Criação de novo sistema baseado em sistema legado (ASP) com prototipo
          funcional de alta fidelidade desenvolvido em Microsoft PowerApps com
          banco MySQL com testes com usuário final em ambiente de produção.
          Durante o posterior desenvolvimento, além do front-end atuei como
          Scrum Master, tendo feito o fluxograma do programa e o esquema de
          Banco de Dados.
        </article>
        <Subtitle title={"Brand Book DTI / AGU"} />
        <article className="customContainer">
          Definição de style guideline baseado nas boas práticas do Google
          Material Design para padronização de projetos de desenvolvimento
          dentro do núcleo de Tecnologia da Advocacia-Geral da União e nova
          logomarca da Diretoria de Tecnologia da Informação.
        </article>
      </main>
    </>
  );
};

export default AGU;
