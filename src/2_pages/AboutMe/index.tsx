import { Preview } from "@/pages/AboutMe/sections/preview";
import { Skills } from "@/pages/AboutMe/sections/skills";
import { Container } from "@/shared/ui";
import LightRaysBackground from "@/shared/ui/LightRaysBackground";
import { Footer } from "@/widgets/footer";

export default async function AboutMe() {
  return (
    <>
      <LightRaysBackground />
      <Container>
        <Preview />
        <Skills />
      </Container>
      <Footer />
    </>
  );
}
