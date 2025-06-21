import { createContext, useContext } from "react";

export const ThemeContext = createContext({ // hum yahan varuiable bhi de sakte hai aur method bhi
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
}) //iss createContext hum yahan defualt value daali jaa sakti hai

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){  ///hum yahan par ek context hook bana rhe hai isko bhi export kiya jaata hai , 
    return useContext(ThemeContext)
}