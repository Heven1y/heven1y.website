import { BORDER_COLORS_SKILLS } from "@/shared/models/enums";
import { SkillElement } from "@/shared/index";
import CardSkills from "../CardSkills";
import GitIcon from "../../icons/SoftwareAndTools/Git";
import JiraIcon from "../../icons/SoftwareAndTools/Jira";
import FigmaIcon from "../../icons/SoftwareAndTools/Figma";
import BitbacketIcon from "../../icons/SoftwareAndTools/Bitbacket";
import AndroidStudioIcon from "../../icons/SoftwareAndTools/AndroidStudio";
import SplineIcon from "../../icons/SoftwareAndTools/Spline";
import TildaIcon from "../../icons/SoftwareAndTools/Tilda";

export default function SoftwareAndToolsCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
      <SkillElement name="Git" borderColor={BORDER_COLORS_SKILLS.Git}>
        <GitIcon />
      </SkillElement>
      <SkillElement name="Jira" borderColor={BORDER_COLORS_SKILLS.Jira}>
        <JiraIcon />
      </SkillElement>
      <SkillElement name="Figma" borderColor={BORDER_COLORS_SKILLS.Figma}>
        <FigmaIcon />
      </SkillElement>
      <SkillElement
        name="Bitbucket"
        borderColor={BORDER_COLORS_SKILLS.Bitbucket}
      >
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
    </CardSkills>
  );
}
