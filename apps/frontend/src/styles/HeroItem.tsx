import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { styled } from '@stitches/react'

type Props = {
    title: string;
    description: string;
    icon: StaticImageData;
}

const HeroItem = (props: Props) => {

  const ContainerFlexItem = styled("div", {
    maxWidth: "250px",
    display: "flex",
  })

  const ContainerLeft = styled("div", {
    display: 'flex',
    justifyContent: 'center'
  })

  const ContainerRight = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  })

  const Title = styled("p", {
    fontSize: '$lg',
    fontWeight: 'bold'
  })

  return (
    <ContainerFlexItem>
      <ContainerLeft>
        <Image 
          src={props.icon}
          alt='Estrela'
          width={50}
        />
      </ContainerLeft>
      <ContainerRight>
        <Title>{props.title}</Title>
        <p>{props.description}</p>
      </ContainerRight>
    </ContainerFlexItem>
  )
}

export default HeroItem