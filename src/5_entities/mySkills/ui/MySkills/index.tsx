import { useTranslation } from "next-i18next";
import styles from "./MySkills.module.scss";
import CardSkills from "../CardSkills";
import SkillElement from "@/shared/ui/SkillElement";
import { BORDER_COLORS_SKILLS } from "@/shared/models/enums";
import GitIcon from "../../icons/SoftwareAndTools/Git";
import JiraIcon from "../../icons/SoftwareAndTools/Jira";
import FigmaIcon from "../../icons/SoftwareAndTools/Figma";
import BitbacketIcon from "../../icons/SoftwareAndTools/Bitbacket";
import AndroidStudioIcon from "../../icons/SoftwareAndTools/AndroidStudio";
import SplineIcon from "../../icons/SoftwareAndTools/Spline";
import TildaIcon from "../../icons/SoftwareAndTools/Tilda";
import ReactIcon from "../../icons/Technologies/React";
import VueIcon from "../../icons/Technologies/Vue";
import IonicIcon from "../../icons/Technologies/Ionic";
import ReduxIcon from "../../icons/Technologies/Redux";
import MobXIcon from "../../icons/Technologies/MobX";
import GraphQLIcon from "../../icons/Technologies/GraphQL";
import FirebaseIcon from "../../icons/Technologies/Firebase";
import NextJSIcon from "../../icons/Technologies/NextJS";
import ReactQueryIcon from "../../icons/Technologies/ReactQuery";
import FSDIcon from "../../icons/Technologies/FSD";
import StorybookIcon from "../../icons/Technologies/Storybook";
import ViteIcon from "../../icons/Technologies/Vite";
import JavaScriptIcon from "../../icons/ProgramingLanguages/JavaScript";
import TypeScriptIcon from "../../icons/ProgramingLanguages/TypeScript";
import JavaIcon from "../../icons/ProgramingLanguages/Java";
import CSharpIcon from "../../icons/ProgramingLanguages/C#";
import USAIcon from "../../icons/Languages/USA";
import RussiaIcon from "../../icons/Languages/Russia";
import JapanIcon from "../../icons/Languages/Japan";
import RevealOnScroll from "@/shared/ui/RevealOnScroll";

const SoftwareAndTools = () => (
  <>
    <SkillElement name="Git" borderColor={BORDER_COLORS_SKILLS.Git}>
      <GitIcon />
    </SkillElement>
    <SkillElement name="Jira" borderColor={BORDER_COLORS_SKILLS.Jira}>
      <JiraIcon />
    </SkillElement>
    <SkillElement name="Figma" borderColor={BORDER_COLORS_SKILLS.Figma}>
      <FigmaIcon />
    </SkillElement>
    <SkillElement name="Bitbucket" borderColor={BORDER_COLORS_SKILLS.Bitbucket}>
      <BitbacketIcon />
    </SkillElement>
    <SkillElement
      name="Android Studio"
      borderColor={BORDER_COLORS_SKILLS.AndroidStudio}
    >
      <AndroidStudioIcon />
    </SkillElement>
    <SkillElement name="Spline" borderColor={BORDER_COLORS_SKILLS.Spline}>
      <SplineIcon />
    </SkillElement>
    <SkillElement name="Tilda" borderColor={BORDER_COLORS_SKILLS.Tilda}>
      <TildaIcon />
    </SkillElement>
  </>
);

const Technologies = () => (
  <>
    <SkillElement name="React" borderColor={BORDER_COLORS_SKILLS.React}>
      <ReactIcon />
    </SkillElement>
    <SkillElement
      name="React Native"
      borderColor={BORDER_COLORS_SKILLS.ReactNative}
    >
      <ReactIcon />
    </SkillElement>
    <SkillElement name="Vue" borderColor={BORDER_COLORS_SKILLS.Vue}>
      <VueIcon />
    </SkillElement>
    <SkillElement name="Ionic" borderColor={BORDER_COLORS_SKILLS.Ionic}>
      <IonicIcon />
    </SkillElement>
    <SkillElement name="Redux" borderColor={BORDER_COLORS_SKILLS.Redux}>
      <ReduxIcon />
    </SkillElement>
    <SkillElement name="MobX" borderColor={BORDER_COLORS_SKILLS.MobX}>
      <MobXIcon />
    </SkillElement>
    <SkillElement name="GraphQL" borderColor={BORDER_COLORS_SKILLS.GraphQL}>
      <GraphQLIcon />
    </SkillElement>
    <SkillElement name="Firebase" borderColor={BORDER_COLORS_SKILLS.Firebase}>
      <FirebaseIcon />
    </SkillElement>
    <SkillElement name="Next.js" borderColor={BORDER_COLORS_SKILLS.NextJs}>
      <NextJSIcon />
    </SkillElement>
    <SkillElement
      name="React-Query"
      borderColor={BORDER_COLORS_SKILLS.ReactQuery}
    >
      <ReactQueryIcon />
    </SkillElement>
    <SkillElement
      name="Feature-Sliced Design"
      borderColor={BORDER_COLORS_SKILLS.FeatureSlicedDesign}
    >
      <FSDIcon />
    </SkillElement>
    <SkillElement name="Storybook" borderColor={BORDER_COLORS_SKILLS.Storybook}>
      <StorybookIcon />
    </SkillElement>
    <SkillElement name="Vite" borderColor={BORDER_COLORS_SKILLS.Vite}>
      <ViteIcon />
    </SkillElement>
  </>
);

const ProgrammingLanguages = () => (
  <>
    <SkillElement
      name="JavaScript"
      borderColor={BORDER_COLORS_SKILLS.JavaScript}
    >
      <JavaScriptIcon />
    </SkillElement>
    <SkillElement
      name="TypeScript"
      borderColor={BORDER_COLORS_SKILLS.TypeScript}
    >
      <TypeScriptIcon />
    </SkillElement>
    <SkillElement name="Java" borderColor={BORDER_COLORS_SKILLS.Java}>
      <JavaIcon />
    </SkillElement>
    <SkillElement name="C#" borderColor={BORDER_COLORS_SKILLS.CSharp}>
      <CSharpIcon />
    </SkillElement>
  </>
);

const Languages = () => (
  <>
    <SkillElement
      name="English - B1"
      borderColor={BORDER_COLORS_SKILLS.English}
    >
      <USAIcon />
    </SkillElement>
    <SkillElement
      name="Русский - Native"
      borderColor={BORDER_COLORS_SKILLS.Russian}
    >
      <RussiaIcon />
    </SkillElement>
    <SkillElement
      name="日本語 - N5"
      borderColor={BORDER_COLORS_SKILLS.Japanese}
    >
      <JapanIcon />
    </SkillElement>
  </>
);

export default function MySkills() {
  const { t } = useTranslation("entities.MySkills");
  return (
    <div className={styles["my-skills"]}>
      <RevealOnScroll variant="arise-from-top">
        <h2 className={styles["my-skills__title"]}>{t("title")}</h2>
      </RevealOnScroll>
      <div className={styles["my-skills__wrapper-cards"]}>
        <div className={styles["my-skills__row-1"]}>
          <RevealOnScroll variant="arise-from-left" delay={250}>
            <CardSkills title={t("titleSoftwareAndTools")}>
              <SoftwareAndTools />
            </CardSkills>
          </RevealOnScroll>
          <RevealOnScroll variant="arise-from-right" delay={500}>
            <CardSkills title={t("titleSoftwareAndTools")}>
              <Technologies />
            </CardSkills>
          </RevealOnScroll>
        </div>
        <div className={styles["my-skills__row-2"]}>
          <RevealOnScroll variant="arise-from-left" delay={750}>
            <CardSkills title={t("titlePrograming")}>
              <ProgrammingLanguages />
            </CardSkills>
          </RevealOnScroll>
          <RevealOnScroll variant="arise-from-right" delay={1000}>
            <CardSkills title={t("titleLang")}>
              <Languages />
            </CardSkills>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
