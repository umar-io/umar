import { motion } from "framer-motion";
import React from "react";

// Interface for stack items
interface StackItemProps {
  image: string;
  text: string;
}

// Interface for Stack component prop
interface StackProps {
  data: StackItemProps[];
}

// Variants for animation
const stackVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 0.8,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};

// StackItem Component
const StackItem: React.FC<StackItemProps> = React.memo((props) => {
  const { image, text } = props;

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={stackVariants}
      className="text-white w-full h-full flex flex-col items-center justify-center cursor-pointer"
    >
      <img src={image} alt={`${text} logo`} className="w-[120px] h-[150px]" />
      <p
        className="text-sm ml-2"
        style={{
          color: 'rgba(0, 0, 0, 0.4)',
          letterSpacing: '-1px',
        }}
      >
        {text}
      </p>
    </motion.div>
  );
});

// Stack Component
const Stack: React.FC<StackProps> = ({ data }) => {
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }} // Trigger animation once when entering the viewport
      transition={{ duration: 1 }}
      id="stack"
      className="flex flex-col justify-center items-center xl:pt-3 lg:pt-2 md:pt-2 ml-5 mr-5 mt-5 mb-10"
    >
      <div className="flex flex-col justify-center items-center lg:gap-6 gap-4 mt-[100px]">
        <h1
          className="text-center lg:text-5xl text-3xl"
          style={{
            color: 'rgba(0, 0, 0, 0.4)',
            fontWeight: '500',
            letterSpacing: '-1px',
          }}
        >
          My Tech Stack
        </h1>
        <p
          className="text-center text-[18px]"
          style={{
            color: 'rgba(0, 0, 0, 0.4)',
            fontWeight: '500',
            letterSpacing: '-1px',
          }}
        >
          Technology I Work With
        </p>
      </div>
      <motion.article
        className="container grid xl:grid-cols-4 grid-cols-2 md:grid-cols-3 laptop:gap-4 gap-2 px-4 justify-center align-center"
      >
        {data.map((stack) => (
          <StackItem key={stack.image} image={stack.image} text={stack.text} />
        ))}
      </motion.article>
    </motion.section>
  );
};

export default Stack;
