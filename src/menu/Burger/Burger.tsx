import { useState } from 'react'
import { BurgerButton, BurgerLine } from './Burger.styled'

export interface MenuItem {
  label: string
  href: string
}

export interface BurgerMenuProps {
  menuItems?: MenuItem[]
}

export const BurgerMenu = ({ menuItems }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <BurgerButton
        onClick={() => {
          console.log('toggle switch')
          toggleMenu()
        }}
      >
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
      </BurgerButton>
      {isOpen && menuItems.map((item) => <div>{item.label}</div>)}
    </div>
  )
}
