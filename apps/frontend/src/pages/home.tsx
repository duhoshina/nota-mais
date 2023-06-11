import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FirstSection,
  ContainerRight,
  ContainerLeft,
  Subtitle,
  Title,
  ContainerButtons,
  SecondSection,
  ElementFloating,
  Span,
  ContainerItems,
  ThirdSection,
  GlassItemsContainer,
} from "../styles/pages/home";
import { Button } from "../styles/buttons";
import Hero from "../assets/astronauta-flutuando.png";
import Image from "next/image";
import Planet from "../assets/planeta.png";
import HeroItem from "../styles/HeroItem";
import IconStar from '../assets/star.png'
import IconBaloon from "../assets/balao-aprovacoes.png"
import Mockup from "../assets/notamais-aplicativo-mockup.png"
import GlassCard from "../styles/GlassCard";
import ItemComponent from "../styles/ItemComponent";

const Homepage = () => {

  return (
    <>
      <Head>
        <title>Página Inicial | Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FirstSection>
        <ContainerRight>
          <Subtitle>SIMULADOR GRÁTIS DO <Span>SiSU 2023</Span></Subtitle>
          <Title>Veja em quantas universidades você passaria no ENEM</Title>
          <ContainerButtons>
            <Link href="/simulate">
              <Button btn="primary">VER MINHAS APROVAÇÕES AGORA</Button>
            </Link>
          </ContainerButtons>
          <ContainerItems>
            <HeroItem title="4.7" description="Avaliações" icon={IconStar} />
            <HeroItem title="927" description="Aprovações" icon={IconBaloon} />
          </ContainerItems>
        </ContainerRight>
        <ContainerLeft>
          <ElementFloating src={Hero} alt="Astronauta flutuando no espaço" />
          <Image
            src={Planet} alt="Planet" style={{
              position: "absolute",
              right: "0",
              top: "350px",
              width: "38vw",
              height: "60vw",
              zIndex: "-2"
            }}
          />
        </ContainerLeft>
      </FirstSection>
      <SecondSection>
        <GlassItemsContainer>
          <GlassCard title="Nota Mais" description="A melhor plataforma para estudantes simularem suas aprovações no Enem 2023 em apenas alguns segundos" />
          <span style={{width: '100%', border: '1px solid rgb(255, 255, 255, 0.2)'}} />
          <GlassCard title="Simulação Real" description="Através do simulador você terá uma noção mais realista das chances de ser selecionado para seu curso desejado" />
          <Button btn="primary">Clique aqui para usar o simulador</Button>
        </GlassItemsContainer>
        <div style={{
          width: "100%",
          maxWidth: "400px",
        }}>
          <Image src={Mockup} alt="Mockup do aplicativo do Nota Mais" sizes="100vw" style={{
            width: '90%',
            height: 'auto',
            maxWidth: '350px',
            backgroundColor: 'pink',
            borderRadius: '45px',
            boxShadow: '-5px -1px 34px 3px rgba(255, 255, 255, 0.49)'
          }}
          />
        </div>
      </SecondSection>

      <ThirdSection>
        <ItemComponent description="Receba o resultado em segundos" icon='img' theme="white"/>
        <ItemComponent description="Notas de corte atualizadas 2023" icon='img' theme="purple"/>
        <ItemComponent description="Notas de corte atualizadas 2023" icon='img' theme="purple"/>
        <ItemComponent description="Veja quais vagas você tem chance na lista de espera" icon='img' theme="white"/>
      </ThirdSection>
    </>
  );
};

export default Homepage;
