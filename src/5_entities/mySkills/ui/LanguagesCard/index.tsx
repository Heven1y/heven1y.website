import { BorderColorsSkills } from "@/shared/models/enums";
import { SkillElement, CardSkills } from "@/shared/ui";

import JapanIcon from "../../icons/Languages/Japan";
import RussiaIcon from "../../icons/Languages/Russia";
import USAIcon from "../../icons/Languages/USA";

export default function LanguagesCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
      <SkillElement
        name="English - B1"
        borderColor={BorderColorsSkills.English}
      >
        <USAIcon />
      </SkillElement>
      <SkillElement
        name="Русский - Native"
        borderColor={BorderColorsSkills.Russian}
      >
        <RussiaIcon />
      </SkillElement>
      <SkillElement
        name="日本語 - N5"
        borderColor={BorderColorsSkills.Japanese}
      >
        <JapanIcon />
      </SkillElement>
    </CardSkills>
  );
}
