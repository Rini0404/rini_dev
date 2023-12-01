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

import { motion } from "framer-motion";

import React from "react";

const svgComponents = [
  { SvgComponent: ReactSVG, name: "React" },
  { SvgComponent: TypeScript, name: "TypeScript" },
  { SvgComponent: JavaScript, name: "JavaScript" },
  { SvgComponent: Expo, name: "Expo Go" },
  { SvgComponent: Redux, name: "Redux" },
  { SvgComponent: Node, name: "NodeJs" },
  { SvgComponent: Mongo, name: "Mongo" },
  { SvgComponent: HTML, name: "HTML" },
  { SvgComponent: Express, name: "Express" },
  { SvgComponent: Mysql, name: "Mysql" },
];

export const Tooling: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-2/4 md:w-2/3 lg:w-1/2 h-full rounded-lg shadow-lg tooling-border">
      <div className="text-color text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
        <h2 className="text-center pt-3">Tools I use!</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mx-auto">
        {svgComponents.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center pb-5 w-1/5">
            <div className="icons">
              <SvgImage SvgComponent={item.SvgComponent} />
            </div>
            <span className="text-white text-xs ">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
