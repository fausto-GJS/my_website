import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Portfolio() {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 5]);

    return (
        <div id="Portfolio">
            <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div>
        </div>
    )
}