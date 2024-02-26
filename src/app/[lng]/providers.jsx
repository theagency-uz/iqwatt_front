'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SidebarContext from '@/context/sidebar.context';
import FormContext from '@/context/form.context';
import FormBar from '@/layout/formBar';
import Loading from '@/Components/common/loading';
import SettingsContext from '@/context/settings.context';
import { getSettings } from '@/services/settings';

export default function Providers({ lng, children }) {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState({});
  const settingsValue = { settings, setSettings };
  const sidebarValue = { open, setOpen };
  const formValue = { form, setForm };

  useEffect(() => {
    setLoading(false);
    async function fetchAll() {
      const tempSettings = await getSettings({ lng });
      setSettings(tempSettings.data);
    }
    fetchAll();
  }, [lng]);
  return (
    <>
      {/* <AnimatePresence mode='wait'>
        <motion.div
          key={loading}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {loading ? (
            <Loading loading={loading} />
          ) : ( */}
      <FormContext.Provider value={formValue}>
        <SidebarContext.Provider value={sidebarValue}>
          <SettingsContext.Provider value={settingsValue}>
            <FormBar form={form} setForm={setForm} lng={lng} />
            {children}
          </SettingsContext.Provider>
        </SidebarContext.Provider>
      </FormContext.Provider>
      {/*     )}
         </motion.div>
        </AnimatePresence>*/}
    </>
  );
}
