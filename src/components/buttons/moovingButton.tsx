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
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      }}
    >
      <Link href={props.link}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={props.onClick}
        >
          {props.text}
        </button>
      </Link>
    </motion.div>
  );
};