import { ICard } from "@/app/types/cards.interface";
import styles from "./card.module.scss";
import { MdSupervisedUserCircle } from "react-icons/md";

interface CardProps {
  item: ICard;
}

const Card: React.FC<CardProps>  = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
