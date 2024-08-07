"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const words = [
  {
    text: "Empowering",
  },
  {
    text: "Sri",
  },
  {
    text: "Lankan",
  },
  {
    text: "Coders.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const TypewriterEffect = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-600 text-xs sm:text-base">
        Learning With Code Sri.
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export default TypewriterEffect;
