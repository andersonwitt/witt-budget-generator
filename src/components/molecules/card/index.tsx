import { CardActionArea, CardHeader, Card as CardMui } from "@mui/material";

interface ICardProps {
  cardAction: () => void;
  title: string;
}

const Card: React.FC<ICardProps> = (props) => {
  const { cardAction, title } = props;

  return (
    <CardMui>
      <CardActionArea data-testid="card-action" onClick={cardAction}>
        <CardHeader title={title} />
      </CardActionArea>
    </CardMui>
  );
};

export default Card;
