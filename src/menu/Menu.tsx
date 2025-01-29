import { BurgerMenu } from "./Burger/Burger"

export const Menu = () => {
    const NAME = 'S.Snape'

    return (
        <>
            <div>{NAME}</div>
            <BurgerMenu MenuItems={[1, 2, 3]}></BurgerMenu>
        </>
    )
}