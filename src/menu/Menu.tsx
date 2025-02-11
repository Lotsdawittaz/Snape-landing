import { BurgerMenu } from './Burger/Burger'
import { MenuItem } from './Burger/Burger'
import { MenuWrapper, NameBox } from './Menu.styled'

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { label: 'About me', href: '/' },
  { label: 'My course', href: '/about' },
  { label: 'Prices', href: '/prices' },
  { label: 'Contacts', href: '/contacts' },
]
const NAME = 'S.Snape'

export const Menu = () => {
  return (
    <>
      <MenuWrapper>
        <NameBox>{NAME}</NameBox>
        <BurgerMenu menuItems={DEFAULT_MENU_ITEMS}></BurgerMenu>
      </MenuWrapper>
    </>
  )
}
