import { Box, Stack, chakra, VStack, Container } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Faq() {
  const data = [
    {
      ques: "What does Plink cost?",
      ans:
        "Plink's basic functionality is free. You only pay for the regular Mollie transaction costs when the payment succeeds. These costs are listed on the Mollie website." +
        "We do charge an additional fee for certain premium functionalities. These additional costs can be found on our pricing page.",
    },
    {
      ques: "How do I sign up?",
      ans: "Plink connects directly to your Mollie account. If you don't have an account yet, you can sign up for Mollie account here. Please note Mollie only allows businesses to sign up.",
    },
    {
      ques: "How do payment links work?",
      ans:
        "You simply provide an amount and a description to generate a payment link. You can send these links to your customers via email, WhatsApp, or whichever way suits you best." +
        "Once your customer clicks on the payment link, he or she is shown a payment screen where the payment can be completed. Once completed, the money is transferred directly to your Mollie account.",
    },
    {
      ques: "Who's behind Plink?",
      ans: "Plink is a side project of Mollie. It's built on Mollie Connect, which enables Mollie users to use Plink's functionality on top of their Mollie account.",
    },
    {
      ques: "Which payment methods are supported?",
      ans: "Plink supports iDEAL, credit card, Bancontact, and all other payment method supported by Mollie.",
    },
    {
      ques: "How do Pay Mails work?",
      ans: "Upload your invoice and let us know which email address we need to send the invoice to. We will take care of the rest, and you will be able to keep track of the payment status in real time.",
    },
    {
      ques: "Is there a Plink API?",
      ans: "We're planning to add more basic functionality to Plink first, before we build more advanced features like an API. If the Mollie API covers your use case, we would currently advise implementing that instead.",
    },
  ]
  return (
    <Layout>
      <Seo />
      <Box maxW={"full"} bgColor="blackAlpha.900" pt={20}>
        <Stack textAlign={"center"}>
          <chakra.h1
            lineHeight={"90%"}
            textAlign={"center"}
            fontWeight={"bold"}
            color="white"
            fontSize="8xl"
            py={5}
          >
            Questions <chakra.span display={"block"}>about Plink</chakra.span>
          </chakra.h1>
          <chakra.p color={"#489DFF"} fontWeight="semibold">
            Simple, powerful, and useful.
          </chakra.p>
        </Stack>
        <Container maxW={'5xl'} justifySelf="center" px={52}>
        <VStack color={'white'} py={10} fontWeight={'semibold'}>
          {data.map(faq => (
            <Stack>
              <chakra.h2 py={4} fontSize="18px">{faq.ques} </chakra.h2>
              <chakra.p pb={5} fontSize="14px">{faq.ans}</chakra.p>
            </Stack>
          ))}
        </VStack>
        </Container>
      </Box>
    </Layout>
  )
}
