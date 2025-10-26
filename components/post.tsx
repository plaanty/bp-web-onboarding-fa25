import styles from './styles.module.css';
import '../assets/global.css';

interface postProps {
  id: number;
  username: string;
  text: string;
  date: Date;
  image: string;
  likeCount: number;
}

export default function Post({
  // id,
  username,
  text,
  date,
  // image,
  likeCount,
}: postProps) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.post}>
          {/* <p>{id}</p> */}
          {/* This is the top line */}
          <div className={styles.topLine}>
            <div className={styles.picAndName}>
              {/* <ProfileIcon size={24} className={styles.pic} /> */}
              <p className={styles.name}>{username}</p>
            </div>
            <p className={styles.date}>{date.toString()}</p>
          </div>

          <p className={styles.textContent}>{text}</p>

          {/* <div>
            <Image
              src={image}
              alt="Picture"
              width={325}
              height={231}
              className={styles.image}
            />
          </div> */}

          <p>{likeCount}</p>
        </div>
      </div>
      {/* 
      <p>{text}</p>
      <p>{image}</p> */}
    </div>
  );
}
