import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { styled } from '@stitches/react'

type Props = {
    description: string;
    icon?: any;
}

const ItemComponent = (props: Props) => {

    const Container = styled("div", {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        textAlign: 'center',
        fontSize: "24px",
        gap: "10px",
        fontWeight: "bold",
    })

    const ContainerImg = styled("div", {
        borderRadius: "20px",
    })

    return (
        <Container>
            <ContainerImg>
                <Image src={props.icon} width={100} alt='icone'/>
            </ContainerImg>
            <p>{props.description}</p>
        </Container>
    )
}

export default ItemComponent