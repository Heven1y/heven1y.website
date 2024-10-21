import { routing } from "@/i18n/routing";
import Layout from "@/pages/Layout";
import NotFound from "@/pages/NotFound";

export default async function GlobalNotFound() {
  return (
    <Layout params={{ locale: routing.defaultLocale }}>
      <NotFound />
    </Layout>
  );
}
