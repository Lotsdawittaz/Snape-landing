import { ImageBlock } from './ImageBlock/ImageBlock'
import { Menu } from './menu/Menu'
import photo_main from './media/photo_main.png'

const MainPage: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <ImageBlock image={photo_main} alt="main"></ImageBlock>
    </>
  )
}

export default MainPage
