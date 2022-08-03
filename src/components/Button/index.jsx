import { FiPlus } from 'react-icons/fi'
import { Container } from './styles';

export function Button({title, ...rest}) {
  return (
    <Container type="button" {...rest} >
     {title}
    </Container>
  );
}