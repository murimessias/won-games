import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  right: () =>
    css`
      grid-template-areas: 'floatImage content';
      grid-template-columns: 1.5fr 2fr;

      ${Content} {
        text-align: right;
      }
    `,

  left: () =>
    css`
      grid-template-areas: 'content floatImage';
      grid-template-columns: 2fr 1.3fr;

      ${Content} {
        text-align: left;
      }
      ${FloatImage} {
        justify-self: end;
        margin-right: 1.6rem;
      }
    `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    display: grid;

    height: 23rem;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${wrapperModifiers[alignment!]()}
  `}
`

type FloatImageProps = Pick<HighlightProps, 'floatImage'>

export const FloatImage = styled.img<FloatImageProps>`
  ${({ theme, floatImage }) => css`
    grid-area: floatImage;
    align-self: end;

    z-index: ${theme.layers.overlay};
    max-height: 23rem;
    max-width: 100%;

    src: ${floatImage};

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;

    padding: ${theme.spacings.xs};
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.lg};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes['2xl']};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.sm};

    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.lg};
    `}
  `}
`
