'use client';
import { useEffect, useState } from 'react';
import SidebarContext from '@/context/sidebar.context';
import FormContext from '@/context/form.context';
import FormBar from '@/layout/formBar';
import SettingsContext from '@/context/settings.context';
import Notificationcontext from '@/context/notification.context';
import Notification from '@/Components/common/form/notification';

export default function Providers({ lng, initialSettings, children }) {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(false);
  const [notify, setNotify] = useState({ open: false, text: '' });
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(initialSettings?.attributes || {});
  const settingsValue = { settings, setSettings };
  const sidebarValue = { open, setOpen };
  const notifyValue = { notify, setNotify };

  const formValue = { form, setForm };

  useEffect(() => {
    setLoading(false);
    async function fetchAll() {
      // const tempSettings = await getSettings({ lng });
      // setSettings(tempSettings.data);
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
      <SettingsContext.Provider value={settingsValue}>
        <Notificationcontext.Provider value={notifyValue}>
          <SidebarContext.Provider value={sidebarValue}>
            <FormContext.Provider value={formValue}>
              <Notification
                handleClose={() =>
                  setNotify((n) => {
                    return { ...n, open: false };
                  })
                }
                open={notify.open}
                text={notify.text}
              />
              <FormBar form={form} setForm={setForm} lng={lng} />
              {children}
            </FormContext.Provider>
          </SidebarContext.Provider>
        </Notificationcontext.Provider>
      </SettingsContext.Provider>
      {/*     )}
         </motion.div>
        </AnimatePresence>*/}
    </>
  );
}
