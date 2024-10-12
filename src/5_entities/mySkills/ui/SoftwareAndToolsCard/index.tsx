import { BorderColorsSkills } from "@/shared/models/enums";
import { SkillElement, CardSkills } from "@/shared/ui";

import AndroidStudioIcon from "../../icons/SoftwareAndTools/AndroidStudio";
import BitbacketIcon from "../../icons/SoftwareAndTools/Bitbacket";
import FigmaIcon from "../../icons/SoftwareAndTools/Figma";
import GitIcon from "../../icons/SoftwareAndTools/Git";
import JiraIcon from "../../icons/SoftwareAndTools/Jira";
import SplineIcon from "../../icons/SoftwareAndTools/Spline";
import TildaIcon from "../../icons/SoftwareAndTools/Tilda";

export default function SoftwareAndToolsCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
      <SkillElement name="Git" borderColor={BorderColorsSkills.Git}>
        <GitIcon />
      </SkillElement>
      <SkillElement name="Jira" borderColor={BorderColorsSkills.Jira}>
        <JiraIcon />
      </SkillElement>
      <SkillElement name="Figma" borderColor={BorderColorsSkills.Figma}>
        <FigmaIcon />
      </SkillElement>
      <SkillElement name="Bitbucket" borderColor={BorderColorsSkills.Bitbucket}>
        <BitbacketIcon />
      </SkillElement>
      <SkillElement
        name="Android Studio"
        borderColor={BorderColorsSkills.AndroidStudio}
      >
        <AndroidStudioIcon />
      </SkillElement>
      <SkillElement name="Spline" borderColor={BorderColorsSkills.Spline}>
        <SplineIcon />
      </SkillElement>
      <SkillElement name="Tilda" borderColor={BorderColorsSkills.Tilda}>
        <TildaIcon />
      </SkillElement>
    </CardSkills>
  );
}
