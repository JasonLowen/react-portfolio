import { RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiReactjsFill, RiTailwindCssFill, RiGithubFill } from "react-icons/ri";
import { TbFileTypeHtml, TbFileTypeCss, TbFileTypeJs, TbBrandCpp, TbBrandTailwind, TbSql, TbBrandCSharp } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 hover:bg-sky-200 hover:cursor-pointer shadow-3xl hover:opacity-85 duration-200"
        >
          <RiHtml5Fill className="text-7xl text-orange-600"/>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 hover:bg-sky-200 hover:cursor-pointer shadow-4xl hover:opacity-85 duration-200"
        >
          <RiCss3Fill className="text-7xl text-blue-800"/>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 hover:bg-sky-200 hover:cursor-pointer shadow-5xl hover:opacity-85 duration-200"
        >
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 hover:bg-sky-200 hover:cursor-pointer shadow-6xl hover:opacity-85 duration-200"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 hover:bg-sky-200 hover:cursor-pointer shadow-7xl hover:opacity-85 duration-200"
        >
          <TbSql className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 hover:bg-sky-200 hover:cursor-pointer shadow-8xl hover:opacity-85 duration-200"
        >
          <RiTailwindCssFill className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 hover:bg-sky-200 hover:cursor-pointer shadow-9xl hover:opacity-85 duration-200"
        >
          <RiGithubFill className="text-7xl"/>
        </motion.div>
        <motion.div
          variants={iconVariants(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4 hover:bg-sky-200 hover:cursor-pointer shadow-10xl hover:opacity-85 duration-200"
        >
          <TbBrandCSharp className="text-7xl text-purple-800"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
