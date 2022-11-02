import { Box, chakra, Container, SimpleGrid, Stack, Button, Flex } from "@chakra-ui/react"
import React from "react"

export default function Footer() {
  return (
    <Box maxW={"full"}>
      <video width={"full"} height={"90vh"} autoPlay loop>
        <source
          src="https://useplink.com/assets/images/frontpage/loop.mp4"
          type="video/mp4"
        />
        <track
          src="captions_en.vtt"
          kind="captions"
          srclang="en"
          label="english_captions"
        />
      </video>
      <Container
        maxW={"7xl"}
        position="absolute"
        bottom={52}
        right={0}
        paddingLeft={10}
        color="white"
      >
        <SimpleGrid columns={{ lg: 2, md: 1 }}>
          <Stack>
            <chakra.h1 fontWeight={"bold"} fontSize="6xl">
              Start for <chakra.span display={"block"}>free today</chakra.span>
            </chakra.h1>
            <Button maxW={'150px'} bgColor="#489DFF" fontSize={"14px"} borderRadius={"20px"}>
              Login with Mollie
            </Button>
          </Stack>
        </SimpleGrid>
        <Flex>
          {/* <chakra.p fontWeight={'semibold'} fontSize="14px">
            plink is powered by Mollie
          </chakra.p> */}
        </Flex>
      </Container>
    </Box>
  )
}
