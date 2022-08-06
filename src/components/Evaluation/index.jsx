import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Container } from './styles';

export function Evaluation({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++){
    let star = i < rating ? BsStarFill : BsStar;
    if ( rating > i && rating < i+1 ){
      star = BsStarHalf;
    }
    stars.push(star)
  }
  return (
    <Container>
      {stars.map((Star, index) => (<Star key={index}/>))}
    </Container>
  );
}