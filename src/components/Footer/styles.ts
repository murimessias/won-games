import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.md};

    ${media.greaterThan('small')`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings['2xs']};
      font-size: ${theme.font.sizes.sm};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xs};
    margin-top: ${theme.spacings.lg};
    margin-bottom: ${theme.spacings.md};
    text-align: center;
  `}
`
