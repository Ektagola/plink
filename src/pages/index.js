import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../section/home/banner"
import Features from "../section/home/features"
import Payment from "../section/home/payment"

export default function Home() {
  return (
    <Layout>
      <Seo/>
      <Banner/>
      <Features/>
      <Payment/>
    </Layout>
  )
}
