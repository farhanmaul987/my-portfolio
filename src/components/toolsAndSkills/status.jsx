import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function StatusBox({ heading, sub }) {
  return (
    <motion.div variants={itemVariants} className="status-box">
      <div className="heading-5 lg:heading-3">{heading}</div>
      <p>{sub}</p>
    </motion.div>
  );
}

StatusBox.propTypes = {
  heading: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

function Status() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative flex min-h-[300px] items-center justify-center">
      {/* Background Md & Lg */}
      <div className="hidden opacity-30 mix-blend-plus-darker md:absolute md:inset-0 md:block md:bg-statusLandscape md:bg-cover md:bg-center"></div>

      {/* Background Sm */}
      <div className="absolute inset-0 block bg-statusPortrait bg-cover bg-center opacity-25 mix-blend-plus-darker md:hidden"></div>

      {/* Border Container with animation */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
      >
        <StatusBox heading="Ongoing" sub="Web Dev Learning" />
        <StatusBox heading="100+" sub="Hours Self-Study" />
        <StatusBox heading="3+" sub="Personal Project" />
      </motion.div>
    </div>
  );
}

export default Status;
