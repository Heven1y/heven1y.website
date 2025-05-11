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
import { Skills } from "@/shared/models/enums";
import { SkillElement } from "@/shared/ui";

export default function SoftwareAndToolsCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
      <SkillElement name="Git" borderColor={Skills.Git}>
        <GitIcon />
      </SkillElement>
      <SkillElement name="Jira" borderColor={Skills.Jira}>
        <JiraIcon />
      </SkillElement>
      <SkillElement name="Figma" borderColor={Skills.Figma}>
        <FigmaIcon />
      </SkillElement>
      <SkillElement name="Bitbucket" borderColor={Skills.Bitbucket}>
        <BitbacketIcon />
      </SkillElement>
      <SkillElement name="Android Studio" borderColor={Skills.AndroidStudio}>
        <AndroidStudioIcon />
      </SkillElement>
      <SkillElement name="Spline" borderColor={Skills.Spline}>
        <SplineIcon />
      </SkillElement>
      <SkillElement name="Tilda" borderColor={Skills.Tilda}>
        <TildaIcon />
      </SkillElement>
    </CardSkills>
  );
}
