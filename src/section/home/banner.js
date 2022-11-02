import {
  AspectRatio,
  Box,
  Container,
  SimpleGrid,
  Stack,
  chakra,
} from "@chakra-ui/react"
import React from "react"

export default function Banner() {
  return (
    <Box maxW={"full"}>
      <AspectRatio width="full" height={"40rem"}>
        <video
          width={"full"}
          src="https://useplink.com/assets/images/frontpage/intro.mp4"
          autoPlay
          loop
        />
      </AspectRatio>
      <Container
        maxW={"7xl"}
        position="absolute"
        top={52}
        right={0}
        paddingLeft={10}
        color="white"
      >
        <SimpleGrid columns={{ lg: 2, md: 1 }}>
          <Stack>
            <chakra.h1 fontWeight={"bold"} fontSize="6xl">
              Send payment requests, get paid fast!
            </chakra.h1>
            <chakra.p fontSize={'14px'} fontWeight="semibold">86% of our payment requests get paid within 12 hours.</chakra.p>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
