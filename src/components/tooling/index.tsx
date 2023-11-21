import {
  Mysql,
  React,
  TypeScript,
  Node,
  Express,
  Mongo,
  JavaScript,
  Expo,
  Redux,
  Tailwind,
  HTML,
  CSS,
} from "../../../public/svgs/";

import SvgImage from "../svgs";

import Typewriter from "typewriter-effect";

const svgComponents = [
  { SvgComponent: React },
  { SvgComponent: TypeScript },
  { SvgComponent: JavaScript },
  { SvgComponent: Expo },
  { SvgComponent: Redux },
  { SvgComponent: Node },
  { SvgComponent: Mongo },
  { SvgComponent: HTML },
  { SvgComponent: CSS },
  { SvgComponent: Tailwind },
  { SvgComponent: Express },
  { SvgComponent: Mysql },
];

export const Tooling = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 w-1/2 h-full rounded-lg shadow-lg tooling-border">
      <div className="text-color text-3xl font-bold mb-4">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Tools").start();
          }}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mx-auto">
        {svgComponents.map((item, index) => (
          <SvgImage key={index} SvgComponent={item.SvgComponent} />
        ))}
      </div>
    </div>
  );
};
