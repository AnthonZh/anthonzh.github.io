import { title, subtitle } from "@/components/primitives";

export const Intro = () => {
  return (
    <div className="inline-block max-w-xl text-center justify-center">
      <span className={title({ color: "blue" })}>Anthony Zhang&nbsp;</span>
      <br />
      <span className={subtitle()}>
        Duke University, Pratt School of Engineering
      </span>
    </div>
  );
};
