"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarContext from "@/context/sidebar.context";
import FormContext from "@/context/form.context";
import FormBar from "@/layout/formBar";
import Loading from "@/Components/common/loading";

export default function Providers({ lng, children }) {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(false);
  const [open, setOpen] = useState(false);
  const sidebarValue = { open, setOpen };
  const formValue = { form, setForm };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key={loading}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <FormContext.Provider value={formValue}>
              <SidebarContext.Provider value={sidebarValue}>
                <FormBar form={form} setForm={setForm} lng={lng} />
                {children}
              </SidebarContext.Provider>
            </FormContext.Provider>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
