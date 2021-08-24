import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type Breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  greaterThan?: Breakpoint
  lessThan?: Breakpoint
}

const mediaMatchModifiers = {
  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)` display: block `}
  `,

  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
  `}
`
