import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import cn from "classnames"
import { useContext } from "react"
import { themeContext } from "./ThemeProvider"
const ThemeToggler = () => {
    const {theme, setTheme } = useContext(themeContext)
    return (
        <div className="flex h-10 overflow-hidden rounded-full w-fit bg-slate-100 text-slate-900">
            <div onClick={() => setTheme('dark')} className={cn("flex px-3 py-1 w-fit items-center justify-center  h-full", {'text-primaryForeground bg-primary': theme === 'dark'})}>
                <MoonIcon className="size-5 text-inherit" />
            </div>
            <div onClick={() => setTheme('light')} className={cn("flex px-3 py-1 w-fit items-center justify-center  h-full", {'text-primaryForeground bg-primary': theme === 'light'})} >
                <SunIcon className="size-5 text-inherit" />
            </div>
        </div>
    )
}
export default ThemeToggler