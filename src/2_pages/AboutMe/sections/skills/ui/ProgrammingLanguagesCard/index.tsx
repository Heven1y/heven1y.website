import { CardSkills } from "@/entities/cardSkills";
import {
  CSharpIcon,
  JavaIcon,
  JavaScriptIcon,
  TypeScriptIcon,
} from "@/shared/icons/programingLanguages";
import { Skills } from "@/shared/models/enums";
import { SkillElement } from "@/shared/ui";

export default function ProgrammingLanguagesCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
      <SkillElement name="JavaScript" borderColor={Skills.JavaScript}>
        <JavaScriptIcon />
      </SkillElement>
      <SkillElement name="TypeScript" borderColor={Skills.TypeScript}>
        <TypeScriptIcon />
      </SkillElement>
      <SkillElement name="Java" borderColor={Skills.Java}>
        <JavaIcon />
      </SkillElement>
      <SkillElement name="C#" borderColor={Skills.CSharp}>
        <CSharpIcon />
      </SkillElement>
    </CardSkills>
  );
}
