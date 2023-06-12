import React from 'react'
import { styled } from '@stitches/react'
import { Title } from './pages/home';

type Props = {
    title: string;
    description: string;
    top?: string;
    bottom?: string;
}

const GlassCard = (props: Props) => {

    const GlassCard = styled("div", {
        padding: "20px",
        zIndex: "2",
        top: `${props.top}`,
        bottom: `${props.bottom}`,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        fontWeight: "bold",
        textAlign: 'start',
        
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(6px) saturate(120%)",
        transition: "0.3s ease-out",
        
    })

    const Description = styled("p", {
        fontWeight: 'normal',
        lineHeight: '2em',
        fontSize: '20px'
    })

    return (
        <GlassCard>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </GlassCard>
    )
}

export default GlassCard