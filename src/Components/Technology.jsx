import { RiFlutterLine, RiReactjsLine, RiJavascriptLine } from "react-icons/ri";
import { SiKotlin, SiMongodb, SiFirebase, SiDart } from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariables = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technology = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariables(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFlutterLine className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariables(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiKotlin className="text-6xl text-purple-600" />
                </motion.div>
                <motion.div
                    variants={iconVariables(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariables(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-6xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariables(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-6xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariables(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFirebase className="text-6xl text-yellow-400" />
                </motion.div>
                <motion.div
                    variants={iconVariables(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDart className="text-6xl text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariables(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className="text-6xl text-yellow-400" />
                </motion.div>
                <motion.div
                    variants={iconVariables(2.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-6xl text-orange-600" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technology;