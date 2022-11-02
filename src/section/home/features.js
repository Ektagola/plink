import {
  chakra,
  Box,
  VStack,
  SimpleGrid,
  Stack,
  Img,
  HStack,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

export default function Features() {
  return (
    <Box bgColor="blackAlpha.900" color={"white"} py={20}>
      <VStack p={10} justify="center">
        <video
          width={"150px"}
          autoPlay
          loop
          src="https://useplink.com/assets/images/frontpage/coin_3.webm"
        />
        <chakra.h1
          lineHeight={"90%"}
          fontSize={"9xl"}
          fontWeight="bold"
          textAlign={"center"}
        >
          <chakra.span display={"block"}>Create</chakra.span>
          <chakra.span display={"block"}>payment</chakra.span>
          <chakra.span display={"block"}>requests</chakra.span>
        </chakra.h1>
        <HStack>
          <video
            width={"150px"}
            autoPlay
            loop
            src="https://useplink.com/assets/images/frontpage/coin_3.webm"
          />
          <chakra.p py={5} px={20} textAlign={"center"} fontWeight={"semibold"}>
            <chakra.span display={"block"}>
              Make a simple payment link in 5 seconds.
            </chakra.span>
            <chakra.span display={"block"}>
              Use our powerful features to customize your request.
            </chakra.span>
          </chakra.p>
          <video
            width={"150px"}
            autoPlay
            loop
            src="https://useplink.com/assets/images/frontpage/coin_3.webm"
          />
        </HStack>
      </VStack>
      <SimpleGrid
        columns={{ lg: 4, md: 2, sm: 1, base: 1 }}
        py={10}
        px={32}
        spacingX={10}
      >
        <Stack>
          <chakra.h1 fontWeight={"semibold"} fontSize="xl">
            One-off or reusable
          </chakra.h1>
          <chakra.p fontWeight={"semibold"} fontSize="12px">
            Request one payment. Or get paid multiple times with a reusable
            link.
          </chakra.p>
        </Stack>
        <Stack>
          <chakra.h1 fontWeight={"semibold"} fontSize="xl">
            Add downloads
          </chakra.h1>
          <chakra.p fontWeight={"semibold"} fontSize="12px">
            Offer downloadable files after your customer completes the payment.
          </chakra.p>
        </Stack>
        <Stack>
          <chakra.h1 fontWeight={"semibold"} fontSize="xl">
            Say thanks your way
          </chakra.h1>
          <chakra.p fontWeight={"semibold"} fontSize="12px">
            Show a custom thank you message after successful payment.
          </chakra.p>
        </Stack>
        <Stack>
          <chakra.h1 fontWeight={"semibold"} fontSize="xl">
            Track & Trace
          </chakra.h1>
          <chakra.p fontWeight={"semibold"} fontSize="12px">
            Track in real-time whether your request gets sent, viewedand paid.
          </chakra.p>
        </Stack>
      </SimpleGrid>
      <SimpleGrid py={52} px={20} columns={{ lg: 2, sm: 1, base: 1 }}>
        <Stack justify={"center"} pl={20}>
          <video
            width={"300px"}
            autoPlay
            loop
            src="https://useplink.com/assets/images/frontpage/mail_loop.webm"
          />
        </Stack>
        <Stack pl={20}>
          <chakra.h2 fontWeight={"bold"} fontSize={"6xl"}>
            <chakra.span display={"block"}>Easily</chakra.span>
            <chakra.span display={"block"}>send requests</chakra.span>
            <chakra.span display={"block"}>via e-mail or SMS</chakra.span>
          </chakra.h2>
          <chakra.p fontWeight={"semibold"}>
            ... or copy-paste the link
          </chakra.p>
        </Stack>
      </SimpleGrid>
      <Stack textAlign={"center"} alignItems="center">
        <chakra.h1 fontWeight={"bold"} lineHeight={"90%"} fontSize={"9xl"}>
          <chakra.span display={"block"}>Scan</chakra.span>
          <chakra.span display={"block"}>& Go </chakra.span>
        </chakra.h1>
        <chakra.p py={5} fontWeight="semibold">
          Transform your payment link into a QR code that customers can scan
          with their
          <chakra.span display={"block"}> phone to pay.</chakra.span>
        </chakra.p>
        <Box bgColor={'white'} p={32} borderRadius={"50%"} />

        <Img
          width={"150px"}
          py={20}
          src="https://useplink.com/assets/images/frontpage/plink_hp_qr-320x0-c-default.png"
        />
      </Stack>
    </Box>
  )
}
