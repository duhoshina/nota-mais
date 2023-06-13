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
  Container,
  FourSection,
  ContainerImage,
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
import Relogio from '../assets/alarm-clock.png'
import Update from '../assets/renewable-energy.png'
import University from '../assets/graduation.png'

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
              <Button btn="primary">usar o simulador agora</Button>
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
        </GlassItemsContainer>
        <ContainerImage>
          <Image src={Mockup} alt="Mockup do aplicativo do Nota Mais" sizes="100vw" style={{
            height: '100%',
            maxWidth: '300px',
            margin: 'auto',
            backgroundColor: 'pink',
            borderRadius: '35px',
            boxShadow: '-5px -1px 34px 3px rgba(255, 255, 255, 0.49)'
          }}
          />
        </ContainerImage>
      </SecondSection>

      <ThirdSection>
        <Title color='dark'>Como o simulador te ajuda?</Title>
        <Container>
          <ItemComponent description="Toda a simulação é feita em alguns segundos" icon={Relogio} />
          <ItemComponent description="Melhore seu posicionamento na seleção do SiSU" icon={Update} />
          <ItemComponent description="Encontre a universidade perfeita para sua nota" icon={University} />
        </Container>
        <Button btn='primary'>Quero fazer uma simulação</Button>
      </ThirdSection>

      <FourSection>
          <p>Todos os direitos reservados 2023</p>
          <p>Simulador Oficial Nota Mais</p>
      </FourSection>

    </>
  );
};

export default Homepage;
