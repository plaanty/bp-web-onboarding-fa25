import styles from './styles.module.css';

interface postProps {
  id: number;
  username: string;
  text: string;
  date: Date;
  image: string;
  likeCount: number;
}

export default function Post({
  id,
  username,
  text,
  date,
  image,
  likeCount,
}: postProps) {
  return (
    <div>
      <div className={styles.topLine}>
        <p>{username}</p>
        <p>{date.toString()}</p>
      </div>

      <p>{text}</p>
      <p>{image}</p>
      <p>{likeCount}</p>
    </div>
  );
}
