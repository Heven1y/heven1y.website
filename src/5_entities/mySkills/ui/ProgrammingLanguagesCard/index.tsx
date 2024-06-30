import { BORDER_COLORS_SKILLS } from "@/shared/models/enums";
import { SkillElement } from "@/shared/index";
import CardSkills from "../CardSkills";
import JavaScriptIcon from "../../icons/ProgramingLanguages/JavaScript";
import TypeScriptIcon from "../../icons/ProgramingLanguages/TypeScript";
import JavaIcon from "../../icons/ProgramingLanguages/Java";
import CSharpIcon from "../../icons/ProgramingLanguages/C#";

export default function ProgrammingLanguagesCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
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
    </CardSkills>
  );
}
