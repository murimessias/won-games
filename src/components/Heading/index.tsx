import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineBottom?: boolean
  lineLeft?: boolean
  lineColor?: LineColors
  size?: 'sm' | 'md'
}

const Heading = ({
  children,
  color = 'white',
  size = 'md',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineBottom={lineBottom}
    lineLeft={lineLeft}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
