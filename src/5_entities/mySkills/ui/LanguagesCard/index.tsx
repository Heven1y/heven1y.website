import { BORDER_COLORS_SKILLS } from "@/shared/models/enums";
import { SkillElement } from "@/shared/index";
import CardSkills from "../CardSkills";
import USAIcon from "../../icons/Languages/USA";
import RussiaIcon from "../../icons/Languages/Russia";
import JapanIcon from "../../icons/Languages/Japan";

export default function LanguagesCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
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
    </CardSkills>
  );
}
