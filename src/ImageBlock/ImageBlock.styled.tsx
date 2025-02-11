import styled from 'styled-components'
import { COLORS } from '../COLORS'

export const ImageWrapper = styled.div`
  width: 100%;
`

export const ImageFrame = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 4px;
  padding-bottom: 4px;
`
export const TopLine = styled.div`
  background: linear-gradient(
    90deg,
    ${COLORS.accent} 0%,
    #186951 77%,
    ${COLORS.black} 100%
  );
  height: 4px;
`
export const BottomLine = styled.div`
  background: linear-gradient(
    270deg,
    ${COLORS.accent} 0%,
    #186951 77%,
    ${COLORS.black} 100%
  );
  height: 4px;
`
