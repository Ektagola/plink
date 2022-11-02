import { Box, Stack, chakra, useMediaQuery } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Marquee from "react-fast-marquee"

export default function Payment() {
    const [isMinWidthMedium] = useMediaQuery("(min-width: 687px)")
  return (
    <Box maxW={"full"} bgColor="white" pt={20} pb={0}>
      <Stack textAlign={"center"} color="black">
        <chakra.h1 fontWeight={"bold"} lineHeight={"90%"} fontSize={"6xl"}>
          <chakra.span display={"block"}>All major</chakra.span>
          <chakra.span display={"block"}>payment methods</chakra.span>
        </chakra.h1>
        <chakra.p
          py={10}
          fontSize={"14px"}
          fontWeight="semibold"
          color={"gray.600"}
        >
          Plink works with Mollie. Your customer can complete the payment
          requests
          <chakra.span display={"block"}>
            using all major payment methods, like creditcard or iDEAL.
          </chakra.span>
        </chakra.p>
      </Stack>
      <Stack pt={20}>
      <Marquee 
       gradientColor={isMinWidthMedium}
       speed={isMinWidthMedium ? 40 : 20}>
      <StaticImage
        height={'300px'}
        placeholder="blurred"
        src="https://useplink.com/assets/images/frontpage/payment-methods_copy_2_2x-1440x0-c-default.png"
      />
      <StaticImage
        height={'300px'}
        placeholder="blurred"
        src="https://useplink.com/assets/images/frontpage/payment-methods_copy_2_2x-1440x0-c-default.png"
      />
      </Marquee>
      </Stack>
    </Box>
  )
}
