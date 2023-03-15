import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Prices } from "@/components/Prices/Prices";
import { Certificates } from "@/components/Certificates/Certificates";
import { Footer } from "@/components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import "animate.css/animate.min.css";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Yuliya Taranova</title>
        <meta name="description" content="Yuliya Taranova personal trainer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <Services />

      <Prices />

      <Certificates />

      <Footer />
    </ThemeProvider>
  );
}
