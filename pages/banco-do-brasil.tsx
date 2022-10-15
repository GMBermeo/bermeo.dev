import { Title } from "../components/ui/Title";
import type { NextPage } from "next";
import { Subtitle } from "../components/ui/Subtitle";
import Head from "next/head";
import { useContext } from "react";
import { LocaleContext } from "@contexts/LocaleContext";

const BB: NextPage = () => {
  const { isEng } = useContext(LocaleContext);

  return (
    <>
      <Head>
        <title>
          {isEng()
            ? "Bank of Brazil Technology and Services images "
            : "Imagens do Banco do Brasil Tecnologia & Serviços "}
          - Guilherme Bermeo
        </title>

        <meta
          name="description"
          content={
            isEng()
              ? "Bank of Brazil Technology and Services images "
              : "Imagens do Banco do Brasil Tecnologia & Serviços "
          }
        />
      </Head>
      <main className="container mx-auto max-w-3xl px-6 sm:px-8">
        <Title title={"Banco do Brasil"} />
        <Subtitle title={"Software de Gestão Empresarial"} />
        <article className="customContainer">
          Software conceitualizado na Diretoria de Novos Produtos Empresariais
          dentro do Banco do Brasil. Um software de gestão que viria a
          substituir o Gestão BB, facilitando pagamentos, recebimento, e outros
          serviços para o setor contábil de clientes jurídicos (empresas) do
          Banco do Brasil. O projeto fora concebido e testado internamente
          durante 6 meses, a ideia principal que rondava a utilização deste
          software se dava no fato de todas as ações poderem ser feitas sem
          necessitar a utilização do mouse. A inspiração para essa
          funcionalidade de navegação via teclado veio da observação de
          atendentes de clientes juridicos em que preferiam a utilização de um
          sistema mais antigo, monocromático, em ordem da utilização apenas do
          teclado e responsividade que não se obtia pelo software “novo” que
          estava no mercado. A protipação de alta fidelidade em Axure RP contou
          com 47 telas, com formulários dinâmicos e utilização 100% funcional
          apenas por teclado, para futuras provas de conceito.
        </article>
        <Subtitle title={"App BB Mobile (versão 3)"} />
        <article className="customContainer">
          Atuação na concepção, desenho, prototipagem e teste de diversas
          funcionalidades na migração do App Mobile 2.0 parta o 3.0, tendo em
          mente a nova arquitetura React Native onde não se é mais necessário o
          uso de componentes nativos de cada tecnologia (swift para iOS e java
          para Android), possibilitando muito mais liberdade e união entre
          versões. Com a nova biblioteca de componentes próprios, fomos capazes
          de desenvolver uma tela de cartões de crédito com muita liberdade
          criativa. Parte dos testes foi feito com pesquisa de usuário externo
          em grupos de testes, grupos internos, método de Wizard of Oz e testes
          A/B. O desenvolvimento da nova interface durou 2 anos, incluindo as
          fases de concepção e testes, que graças à modularidade do app, nos
          permitiu desenvolver diferentes partes ao mesmo tempo.
        </article>
        <Subtitle title={"SINDEC"} />
        <article className="customContainer">
          Desenvolvimento front-end do Sistema Nacional de Informações de Defesa
          do Consumidor, software interno utilizado na gestão de atendimentos
          realizados pelo PROCON (Programa de Proteção e Defesa do Consumidor)
          em todos os estados do Brasil. O desenvolvimento dos componentes foi
          baseado no Google Material Design guideline e nos style guidelines da
          própria plataforma (Bootstrap) com adaptação para a nova identidade
          visual do orgão.
        </article>
        <Subtitle title={"Consumidor.gov.br"} />
        <article className="customContainer">
          Novo portal de defesa do consumidor (consumidor.gov.br) com motion
          design em prototipação de alta fidelidade em Axure RP, teste A/B com
          grupos internos e posterior desenvolvimento front-end da página.
        </article>
        <Subtitle title={"Gestão de Projetos de Infraestrutura"} />
        <article className="customContainer">
          Software de uso interno requisitado pela equipe de Proketos de
          Infraestrutura do Banco do Brasil, foi um gerenciador de ordens de
          serviços que contou com um periodo de concepção de 3 meses, onde atuei
          no desenvolvimento front-end utilizando bootstrap.
        </article>
        <Subtitle title={"App BB Mobile (versão 2)"} />
        <article className="customContainer">
          Prototipação de alta fidelidade em Axure RP do “novo” aplicativo do
          Banco do Brasil, com o desenvolvimento e teste de novas
          funcionalidades com teste em grupo de usuários internos. O grande
          desafio da versão 2 do aplicativo Mobile do Banco do Brasil, era
          existir 3 versões distintas para cada plataforma (Android, iOS e
          Windows Phone), onde cada qual possuia suas próprias limitações, então
          cada nova funcionalidade necessitava ser desenhada e testada no mínimo
          3 vezes. Fui responsável por maior parte da adaptação do aplicativo de
          2011 (1.0) para a versão 2.0 com novo visual publicado em 2014,
          passando de uma arquitetura iframe para arquiteturas de componentes
          nativos (swift, java e c#, conforme plataformas mobiles).
        </article>
      </main>
    </>
  );
};

export default BB;
