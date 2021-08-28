import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const wrapperModifiers = {
  sm: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xs};
  `,

  md: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.sm};
    padding: ${theme.spacings['2xs']} ${theme.spacings.md};
  `,

  lg: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.md};
    padding: ${theme.spacings['2xs']} ${theme.spacings.xl};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings['2xs']};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings['2xs']};

    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    text-decoration: none;

    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: none;
    border-radius: ${theme.border.radius};
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
