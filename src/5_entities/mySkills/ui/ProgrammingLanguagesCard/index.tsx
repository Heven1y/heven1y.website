import { BorderColorsSkills } from "@/shared/models/enums";
import { SkillElement } from "@/shared/ui";

import CSharpIcon from "../../icons/ProgramingLanguages/C#";
import JavaIcon from "../../icons/ProgramingLanguages/Java";
import JavaScriptIcon from "../../icons/ProgramingLanguages/JavaScript";
import TypeScriptIcon from "../../icons/ProgramingLanguages/TypeScript";
import CardSkills from "../CardSkills";

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
