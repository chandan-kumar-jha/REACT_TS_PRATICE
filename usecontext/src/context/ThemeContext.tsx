import { createContext, useMemo, useState } from "react";

// interface of data type 
interface ThemeContextType {
    theme : string, 
    toggleTheme : () => void
}

// create a context and give genric type ThemeContextType if not provided but undefined 
// eslint-disable-next-line react-refresh/only-export-components
export  const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

//create a provider 
export function ThemeProvider ({children }: {children: React.ReactNode}) {

    // initial value is dark 
    const [theme , setTheme] = useState<string>('dark')

    //seter function to change the value 
    function toggleTheme ():void {
        setTheme((prev)=> ( prev ===  `dark` ? `white`:`dark`))
    }

    // for stable ref value that only allow the childern to render not when new obj create
    const value = useMemo<ThemeContextType>(() => {
     return {
        theme,
        toggleTheme
    }
}, [theme])

    // craete a provider and return so that all childern access the context
    return (
        <ThemeContext.Provider value={value}>
             {children}
        </ThemeContext.Provider>
    )
}

