import { Container } from './styles'

export function Description({ description, className }) {
  return( 
  <Container className={className}>
    {description}
  </Container>
  )
}
