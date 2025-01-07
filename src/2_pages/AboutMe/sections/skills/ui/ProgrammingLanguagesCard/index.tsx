import { CardSkills } from "@/entities/cardSkills";
import {
  CSharpIcon,
  JavaIcon,
  JavaScriptIcon,
  TypeScriptIcon,
} from "@/shared/icons/programingLanguages";
import { BorderColorsSkills } from "@/shared/models/enums";
import { SkillElement } from "@/shared/ui";

export default function ProgrammingLanguagesCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
      <SkillElement
        name="JavaScript"
        borderColor={BorderColorsSkills.JavaScript}
      >
        <JavaScriptIcon />
      </SkillElement>
      <SkillElement
        name="TypeScript"
        borderColor={BorderColorsSkills.TypeScript}
      >
        <TypeScriptIcon />
      </SkillElement>
      <SkillElement name="Java" borderColor={BorderColorsSkills.Java}>
        <JavaIcon />
      </SkillElement>
      <SkillElement name="C#" borderColor={BorderColorsSkills.CSharp}>
        <CSharpIcon />
      </SkillElement>
    </CardSkills>
  );
}
