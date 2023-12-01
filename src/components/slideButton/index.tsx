import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type SliderProps = {
  link: string;
};

export const Slider: React.FC<SliderProps> = ({ link }) => {
  const x = useMotionValue(0);
  const xInput = [0, 100]; // Adjust if needed

  const color = useTransform(x, xInput, [
    "#b0b3b8", // Starting color
    "rgba(0, 255, 170, 0.637)", // Ending color
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  const [linkOpened, setLinkOpened] = React.useState(false);

  React.useEffect(() => {
    const unsubscribeX = x.onChange((currentX) => {
      if (currentX > 300 && !linkOpened) {
        setLinkOpened(true);
        window.open(link, "_blank");
      }
    });

    return () => {
      unsubscribeX();
      x.stop();
    };
  }, [x, linkOpened]);

  const handleDragEnd = () => {
    // Reset the slider after the drag is finished
    if (linkOpened) {
      x.set(0);
      setLinkOpened(false);
    }
  };

  const text = "Slide to view".split("");
  const [currentX, setCurrentX] = React.useState(0);

  // Function to calculate opacity based on the slider's position
  const calculateOpacity = (index: number) => {
    const fadeStart = 50 + index * 15; // Start fading when the slider is 50px + 15px per letter index away
    return currentX > fadeStart ? Math.max(2 - (currentX - fadeStart) / 20, 0) : 1;
  };

  React.useEffect(() => {
    const unsubscribeX = x.onChange(latestX => {
      setCurrentX(latestX);
    });

    return () => {
      unsubscribeX();
      x.stop();
    };
  }, [x]);

  return (
    <motion.div
      className="example-container bg-teal-400/10 "
      style={{
        width: "350px",
        height: "50px",
        borderRadius: "30px",
        cursor: "pointer",
        display: "flex", // Use flexbox for horizontal centering
        position: "relative", // Needed for absolute positioning of the box
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "40%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        className="text-color text-md
        font-mono
        "
      >
        {text.map((letter, index) => (
          <span
            key={index}
            style={{
              opacity: calculateOpacity(index),
              display: "inline-block",
              marginRight: "4px", // Adjust spacing between letters
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <motion.div
        className="box"
        style={{
          x,
          width: "50px",
          height: "50px",
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 250 }}
        onDragEnd={handleDragEnd}
      >
        <svg className="progress-icon" viewBox="0 0 50 50">
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{ translateX: 5, translateY: 5 }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M17,17 L33,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathA }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M33,17 L17,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathB }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};
