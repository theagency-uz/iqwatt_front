"use client";
import { createContext } from "react";

const FormContext = createContext({
    form: { open: false, services: [] },
    setForm: () => { },
});

export default FormContext;
