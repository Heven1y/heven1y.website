import { CardSkills } from "@/entities/cardSkills";
import { JapanIcon, RussiaIcon, USAIcon } from "@/shared/icons/languages";
import { Skills } from "@/shared/models/enums";
import { SkillElement } from "@/shared/ui";

export default function LanguagesCard({ title }: { title: string }) {
  return (
    <CardSkills title={title}>
      <SkillElement name="English - B1" borderColor={Skills.English}>
        <USAIcon />
      </SkillElement>
      <SkillElement name="Русский - Native" borderColor={Skills.Russian}>
        <RussiaIcon />
      </SkillElement>
      <SkillElement name="日本語 - N5" borderColor={Skills.Japanese}>
        <JapanIcon />
      </SkillElement>
    </CardSkills>
  );
}
