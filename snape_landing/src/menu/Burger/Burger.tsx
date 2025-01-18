import { useState } from "react"
import { BurgerButton } from "./Burger.styled"

export const BurgerMenu = ({ MenuItems }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={() => console.log('3333')}></button>
            <BurgerButton></BurgerButton>
        </div>
    )
}