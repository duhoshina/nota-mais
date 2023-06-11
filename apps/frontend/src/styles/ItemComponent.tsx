import React from 'react'
import { styled } from '@stitches/react'
import Relogio from '../assets/relogio.png'

type Props = {
    description: string;
    icon: any;
    theme: "white" | "purple";
}

const ItemComponent = (props: Props) => {

    const Container = styled("div", {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        width: "250px",
        textAlign: 'center',
        fontSize: "22px",
        gap: "20px",
        fontWeight: "500"
    })

    const ContainerImg = styled("div", {
        width: "150px",
        height: "150px",
        borderRadius: "20px",
        
        variants: {
            theme: {
                white: {
                    backgroundColor: "white",
                    boxShadow: '0px 0px 35px 3px rgba(255, 255, 255, 0.5)'
                },
                purple: {
                    backgroundColor: "#8d5cff",
                    boxShadow: '0px 0px 35px 3px rgba(200, 80, 255, 0.5)'
                }
            }
        }
    })

    return (
        <Container>
            <ContainerImg theme={props.theme}>

            </ContainerImg>
            <p>{props.description}</p>
        </Container>
    )
}

export default ItemComponent