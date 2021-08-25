import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    padding: ${theme.spacings.sm} 0;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;

    > div {
      margin-left: ${theme.spacings.xs};
    }
  `}
`

export const MenuNav = styled.div`
  ${media.greaterThan('medium')`
    ${({ theme }) => css`
      margin-left: ${theme.spacings.sm};
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    margin: 0.3rem ${theme.spacings.sm} 0;
    font-size: ${theme.font.sizes.md};
    text-align: center;
    text-decoration: none;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    background: ${theme.colors.white};

    opacity: ${isOpen ? 1 : 0};
    transition: opacity 250ms ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xs};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      margin-bottom: ${theme.spacings.sm};
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xl};

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: 250ms ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: 250ms ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xl} ${theme.spacings.xl};

    > span {
      display: block;
      margin: ${theme.spacings.sm} 0;
      font-size: ${theme.font.sizes.xs};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
