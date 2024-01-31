"use client";
import { createContext } from "react";

const Notificationcontext = createContext({
    notify: { open: false, text: '' },
    setNotify: () => { },
});

export default Notificationcontext;
