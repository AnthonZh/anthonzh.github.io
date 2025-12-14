import { GetStaticProps } from "next";

import { title } from "@/components/primitives";
import Slideshow from "@/components/slideshow";
import DefaultLayout from "@/layouts/default";
import fs from "fs";
import path from "path";


type Props = {
  images: string[];
};

export default function DocsPage({ images }: Props) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>The Cavaliers</h1>
        </div>
      </section>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <p>
          In 2024 and 2025, I had the opportunity to march at the Cavaliers Drum
          and Bugle Corps. Being a part of this wonderful organization has
          brought me so much joy and camaderie, as well as some of the best
          memories of my life. Drum Corps International is a niche activity, if
          you are curious to learn more, this video below does a good job at at
          explaining what this amazing activity is.
        </p>
        <div className="flex items-center justify-center gap-8">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
            height="500vw"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/j53QbDBKFB0?si=xy8XBgxWaqXn7WnS"
            title="YouTube video player"
            width="889vh"
          />
        </div>
        <Slideshow images={images} interval={4500} />
      </section>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  let images: string[] = [];

  try {
    const files = fs.readdirSync("/cavaliers/");

    images = files
      .filter((file) => /\.(jpe?g|png|webp|avif|gif|jpg)$/i.test(file))
      .sort()
      .map((file) => `/cavaliers/${file}`);
  } catch {}

  return {
    props: { images },
  };
};
