import { CardSkills } from "@/entities/cardSkills";
import {
  GitIcon,
  JiraIcon,
  FigmaIcon,
  BitbacketIcon,
  AndroidStudioIcon,
  SplineIcon,
  TildaIcon,
} from "@/shared/icons/softwareAndTools";
import { BorderColorsSkills } from "@/shared/models/enums";
import { SkillElement } from "@/shared/ui";

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
