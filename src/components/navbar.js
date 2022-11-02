import React from "react"
import {
  Flex,
  chakra,
  useDisclosure,
  HStack,
  Button,
  Container,
} from "@chakra-ui/react"
import { Link } from "gatsby"

export default function Navbar() {
  const mobileNav = useDisclosure()
  return (
    <Container
      bgColor={"#237BC3"}
      color="white"
      overflow={"hidden"}
      position={"relative"}
      maxW="full"
      px={{
        base: 2,
        sm: 4,
        lg: 10,
      }}
      py={5}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.h1 fontSize="2xl" fontWeight="bold" ml="2">
            <Link to="/">plink</Link>
          </chakra.h1>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={5}
            mr={4}
            fontSize={"14px"}
            fontWeight={"semibold"}
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Link to="/faq">FAQ</Link>
            <Link to="#">Contact</Link>
          </HStack>
          <Button bgColor="#489DFF" fontSize={"14px"} borderRadius={"20px"}>
            <Link to="/login">Login with Mollie</Link>
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}
