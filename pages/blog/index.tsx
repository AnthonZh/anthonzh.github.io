import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Blog</h1>
        </div>
      </section>
      <p>
        Welcome to my blog! Here I will post about things that I find fun or
        that I may like, and more technical details about my projects can be
        found in my homepage!
      </p>
    </DefaultLayout>
  );
}
