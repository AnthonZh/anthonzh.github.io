import { Image } from "@heroui/image";

import { title, subtitle } from "@/components/primitives";

export const Intro = () => {
  return (
    <div className="inline-block max-w-xl text-center justify-center">
      <span className={title({ color: "violet" })}>Anthony Zhang&nbsp;</span>
      <br />
      <span className={subtitle()}>ECE & CS @ Duke University</span>
      <div className="flex justify-center">
        <Image
          alt="Picture of Anthony, courtesy of Duke Robotics Club"
          height={400}
          sizes="(max-width: 640px) 100vw, 400px"
          src="/anthonyformal.jpg"
          style={{ width: "100%", height: "auto", display: "block" }} // responsive
          width={400}
        />
      </div>
    </div>
  );
};
