import { motion } from "framer-motion";
import Link from "next/link";

type MoovingButtonProps = {
  onClick?: () => void;
  text: string;
  rotate?: number;
  scale?: number;
  link?: string;
};

export const MoovingButton: React.FC<MoovingButtonProps> = (props) => {
  const hoverAnimation = {
    width: "100%",
  };

  const initialAnimation = {
    width: "0%",
  };

  return (
    <Link href={props.link || "#"} passHref>
      <motion.div
        whileHover={{ scale: 1.2 }}
        style={{
          position: "relative",
          display: "inline-block",
        }}
        className="mooving-buttons"
      >
        <motion.a
          style={{
            textDecoration: "none",
            color: "inherit",
            position: "relative",
            zIndex: 1,
            padding: "0 2px",
          }}
        >
          {props.text}
        </motion.a>
        <motion.span
          initial={initialAnimation}
          whileHover={hoverAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "2px",
            backgroundColor: "black",
            zIndex: 0,
          }}
        />
      </motion.div>
    </Link>
  );
};
