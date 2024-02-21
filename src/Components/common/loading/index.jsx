import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import classes from "./styles.module.css";
export default function Loading({ loading }) {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={loading}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={classes.loading}>
          <Image
            src={"/icons/logo.svg"}
            width={186}
            height={60}
            alt={"logo"}
            className={classes.logo}
            priority
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
