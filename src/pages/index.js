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
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const router = useRouter();

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "ua" : "en";

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Yuliya Taranova</title>
        <meta name="description" content="Yuliya Taranova personal trainer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        onToggleLanguageClick={onToggleLanguageClick}
        changeTo={changeTo}
      />

      <Hero lang={router.locale} />

      <Services lang={router.locale} />

      <Prices lang={router.locale} />

      <Certificates lang={router.locale} />

      <Footer lang={router.locale} />
    </ThemeProvider>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
