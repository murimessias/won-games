import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="sm" lineBottom lineColor="secondary">
          Contact Us
        </Heading>

        <a href="mailto:murilo.messias@gmail.com">murilo.messias@gmail.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="sm" lineBottom lineColor="secondary">
          Follow Us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://instagram.com/murimessias"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/murimessias"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://likedin.com/in/murimessias"
            target="_blank"
            rel="noopener, noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="sm" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Store</a>
          </Link>
          <Link href="/">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="sm" lineBottom lineColor="secondary">
          Location
        </Heading>

        <nav aria-labelledby="footer-contact">
          <span>Lorem ipsum.</span>
          <span>Lorem ipsum, dolor sit.</span>
          <span>Lorem ipsum, amet consectetur..</span>
        </nav>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2021 &copy; All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
