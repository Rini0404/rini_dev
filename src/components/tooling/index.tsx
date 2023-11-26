import {
  Mysql,
  ReactSVG,
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

import { motion } from "framer-motion";
import React from "react";

const svgComponents = [
  { SvgComponent: ReactSVG },
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

type ToolingProps = {
  didReset: boolean;
};

export const Tooling: React.FC<ToolingProps> = ({ didReset }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 w-3/4 sm:w-2/3 md:w-1/2 h-full rounded-lg shadow-lg tooling-border">
      <div className="text-color text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
        <h2 className="text-center">Tools I use!</h2>
      </div>
      <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto">
        {svgComponents.map((item, index) => (
          <div
            key={index}
            className="icons w-12 h-12 sm:w-16 sm:h-16"
          >
            <SvgImage SvgComponent={item.SvgComponent} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
