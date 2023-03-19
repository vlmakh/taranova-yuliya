import { HeroWrap, Name, Trainer, Tagline } from './Hero.styled';
import { useTranslation } from "next-i18next";

export const Hero = ({lang}) => {
  const { t } = useTranslation("common");

  return (
    <HeroWrap>
      <Name>{t("hero.name")}</Name>
      <Trainer>{t("hero.trainer")}</Trainer>
      <Tagline lang={lang}>{t("hero.tagline")}</Tagline>
    </HeroWrap>
  );
};
