"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarContext from "@/context/sidebar.context";

export default function Providers({ children }) {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const sidebarValue = { open, setOpen };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* <AnimatePresence mode="sync">
        <motion.div
          key={loading}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {loading ? (
            <Loading />
          ) : (
          )}
        </motion.div>
      </AnimatePresence> */}
      <SidebarContext.Provider value={sidebarValue}>
        {children}
      </SidebarContext.Provider>
    </>
  );
}
