import {
  TopLine,
  BottomLine,
  ImageFrame,
  ImageWrapper,
} from './ImageBlock.styled'
interface IProps {
  image: string
  alt: string
}

export const ImageBlock = ({ image, alt }: IProps): React.ReactNode => {
  return (
    <ImageWrapper>
      <TopLine></TopLine>
      <ImageFrame src={image} alt={alt}></ImageFrame>
      <BottomLine></BottomLine>
    </ImageWrapper>
  )
}
