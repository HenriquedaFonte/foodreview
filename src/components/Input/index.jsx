
import { Container } from './styles';

export function Input({icon: Icon, img: Img, ...rest}) {
  return (
    <Container>
      {Icon && <Icon size={20}/>}
      <input {...rest} />
      {Img && <Img size={20}/>}       
    </Container>
  );
}