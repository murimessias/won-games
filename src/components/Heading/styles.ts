import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from '.'

const wrapperModifiers = {
  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.md};

    &::after {
      width: 3rem;
    }
  `,

  md: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xl};
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings['2xs']};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.md};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineBottom, lineColor, lineLeft, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xl};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes['2xl']}
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
