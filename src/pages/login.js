import React from "react"
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Container,
  chakra,
} from "@chakra-ui/react"
import Seo from "../components/seo"
import { Link } from "gatsby"

export default function Login() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Seo title="Mollie login - Login to your Mollie Dashboard" />
      <Stack spacing={8} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>mollie</Heading>
          <Heading fontSize={"4xl"}>Welcome back</Heading>
        </Stack>
        <Container
          maxW={"5xl"}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"sm"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox checked pr={20}>Remember me</Checkbox>
                <Link color={"gray.500"}>Forgot your password?</Link>
              </Stack>
              <Button
                bg={"#1262BD"}
                color={"white"}
                _hover={{
                  bg: "#11539E",
                }}
              >
                Log in
              </Button>
            </Stack>
            <chakra.p py={5} textAlign={"center"} color={"gray.500"}>
              No account yet?
              <chakra.span fontWeight={'semibold'} color="#11539E">
                <Link to="#"> Sign up</Link>
              </chakra.span>
            </chakra.p>
          </Stack>
        </Container>
      </Stack>
    </Flex>
  )
}
