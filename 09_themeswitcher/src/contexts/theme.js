import { createContext, useContext } from "react";

export const ThemeContext = createContext({ // hum yahan varuiable bhi de sakte hai aur method bhi
    themeMode: "light",
    darkTheme: () => {}, // sirf yahan ye bola jaa rha hai ki aap ekk function
    lightTheme: () => {}, // sirf yahan ye bola jaa rha hai ki aap ekk function
}) //iss createContext hum yahan defualt value daali jaa sakti hai

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){  ///hum yahan par ek context hook bana rhe hai isko bhi export kiya jaata hai , 
    return useContext(ThemeContext)
}