import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Intro } from "@/components/introduction";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Intro />

        <div className="flex gap-3">
          
        </div>
      </section>
    </DefaultLayout>
  );
}
