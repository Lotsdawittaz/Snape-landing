import styled from 'styled-components'
import { COLORS } from '../../COLORS'

export const BurgerButton = styled.div`
  height: 22px;
  width: 32px;
  cursor: pointer;
`
export const BurgerLine = styled.div`
  --original-width: 32px;
  background: ${COLORS.accent};
  width: var(--original-width);
  height: 2px;
  border-radius: 2px;
  margin-bottom: 8px;
  will-change: transform;

  &:nth-child(2) {
    width: calc(var(--original-width) * 0.75);
  }
  &:nth-child(3) {
    width: calc(var(--original-width) * 0.5);
  }
`
