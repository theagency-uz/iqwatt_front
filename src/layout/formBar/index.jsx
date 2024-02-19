"use client";
import { Box } from "@mui/material";

import classes from "./styles.module.css";
import Sidebar from "../sidebar";
import Form from "@/Components/common/form";
import { useTranslation } from "@/app/i18n/client";

function FormBar({lng, form, setForm, ...props }) {
  const { t, i18n } = useTranslation(lng);

  return (
    <Sidebar
      open={form.open}
      setOpen={(v) => setForm({ open: v })}
      isForm={true}
    >
      <Box className={classes.wrapper}>
        <h3 className={classes.drawerTitle}>
          {t("Оставьте ваши контактные данные и мы свяжемся с вами")}
        </h3>

        <Form />
      </Box>
    </Sidebar>
  );
}

export default FormBar;
