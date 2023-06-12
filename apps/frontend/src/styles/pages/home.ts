import Image from "next/image";
import { styled, keyframes } from "../../../stitches.config";
import { TypographyH1, TypographyP1 } from "../typography";

const floating = keyframes({
  "0%": {
    transform: "translateY(10px)",
  },
  "100%": {
    transform: "translateY(0px)",
  },
});

export const Title = styled(TypographyH1, {
  color: "$text",
  fontSize: "$lg",
});

export const Subtitle = styled(TypographyP1, {
  fontSize: "$md",
  fontWeight: "500",
});

export const Span = styled("span", {
  color: "$text",
  fontWeight: "bold",
  fontSize: "$md",
  display: "inline",

  variants: {
    color: {
      pink: {
        color: "$primary",
        fontSize: "$md"
      }
    }
  }
});

export const FirstSection = styled("section", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexWrap: 'wrap',
  justifyContent: "space-between",
  flexDirection: "column-reverse",

  '@bp1': {
    flexDirection: "row",
  },

 '@bp2': {
  justifyContent: 'start'
 },

 '@bp3': {
  justifyContent: 'space-around'
 }

});

export const SecondSection = styled("section", {
  width: "100%",
  marginTop: '50px',
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column-reverse",
  gap: "50px",
  textAlign: "center",
  justifyContent: "center",

  '@bp1': {
    flexDirection: "row-reverse",
    justifyContent: "start",
    maxWidth: '1240px'
  },

});

export const ContainerRight = styled("div", {
  minWidth: "340px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  gap: "20px",


  '@bp1': {
    minWidth: "340px",
    width: "45%",
  },

  '@bp2': {
    width: '520px',
    fontSize: "24px",
  }

});

export const ContainerLeft = styled("div", {
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  width: "240px",

  '@bp1': {
    width: "40%",
    maxWidth: "380px"
  }

});

export const ContainerButtons = styled("div", {
  display: "flex",
  width: "100%",
  textAlign: "center",
  gap: "20px",
});

export const ElementFloating = styled(Image, {
  width: "100%",
  height: "100%",
  zIndex: "-2",
  animation: `${floating} 1s infinite ease-in-out alternate`,

  '@bp1': {
    width: '30vw',
    maxWidth: "380px"
  }

});

export const ContainerItems = styled("div", {
  display: "flex",
  width: "100%",
  marginTop: "20px",
  justifyContent: "center",
  gap: "20px",
  alignItems: "end",

  '@bp1': {
    justifyContent: "start"
  }
});

export const SpanDivisor = styled("span", {
  border: "1px solid white",
  opacity: "70%",
  height: "30px",

  "@bp3": {
    height: "70px"
  }
});

export const ThirdSection = styled("section", {
  display: "flex",
  width: '100%',
  maxWidth: '1240px',
  flexDirection: "column",
  alignItems: 'center',
  gap: '50px',
  lineHeight: '2em',
  marginTop: '50px',

  '@bp1': {
    marginTop: '0px'
  }

})

export const GlassItemsContainer = styled("div", {
  flexDirection: "column",
  display: "flex",
  maxWidth: "460px",
  gap: "40px",

})

export const Container = styled("div", {
  display: 'flex',
  gap: '50px',
  flexDirection: 'column',

  '@bp2': {
    flexDirection: 'row'
  }
})