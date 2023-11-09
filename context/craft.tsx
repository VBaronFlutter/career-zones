import { createContext } from "react";

export const CraftContext = createContext({
    craft: "engineering",
    setCraft: (craft: string) => {}
});