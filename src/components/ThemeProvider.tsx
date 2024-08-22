import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
export const themeContext = createContext<{
    theme: string | undefined; 
    setTheme: (theme: string) => void;
}>({
    theme: 'light',
    setTheme: () => {}
})


const ThemeProvider:FC<PropsWithChildren>  = ({children}) => {
    const [theme, setTheme] = useState<string>()
    useEffect(() => {
        const t = localStorage.getItem('theme')
        setTheme(t || 'light')

    }, [])
    useEffect(()=> {
        if(theme){
            if(theme === "light"){
            
            document.body?.classList.remove('dark')
            }else{
                document.body?.classList.add('dark')
            }
            localStorage.setItem("theme",theme)
        }
}, [theme])
    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider