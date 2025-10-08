import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import Image from 'next/image';
import styles from './styles.module.css';
import '../assets/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.topLine}>
            <div className={styles.picAndName}>
              <ProfileIcon size={24} className={styles.pic} />
              <p className={styles.name}>rbeggs</p>
            </div>
            <p className={styles.date}>September 19</p>
          </div>

          <p className={styles.textContent}>
            In response to the growing homelessness crisis in San Francisco, a
            local nonprofit organization, Code Tenderloin, has launched a
            comprehensive initiative aimed at providing long-term solutions for
            individuals experiencing homelessness. The organization, founded in
            2015, is dedicated to addressing both immediate needs and underlying
            causes of homelessness through a combination of shelter services,
            job training programs, and mental health support. Read more online:
            https://www.codetenderloin.org/
          </p>

          <div>
            <Image
              src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
              alt="Picture"
              width={325}
              height={231}
              className={styles.image}
            />
          </div>

          <div className={styles.responses}>
            <div className={styles.likesAndHeart}>
              <HeartIcon size={24} />
              <p className={styles.likes}>256 Likes</p>
            </div>

            <ShareIcon size={24} />
          </div>
        </div>

        <div className={styles.topLine}>
          <div className={styles.picAndName}>
            <ProfileIcon size={24} />
            <p className={styles.name}>daviddd</p>
          </div>
          <p className={styles.date}>September 20</p>
        </div>

        <p className={`${styles.textContent} ${styles.textResponses}`}>
          This organization is doing amazing work tackling the complex root
          causes of the issue.
        </p>

        <div className={styles.topLine}>
          <div className={styles.picAndName}>
            <ProfileIcon size={24} />
            <p className={styles.name}>vppraggie</p>
          </div>

          <p className={styles.date}>September 21</p>
        </div>

        <p className={`${styles.textContent} ${styles.textResponses}`}>
          Thanks for sharing!
        </p>
      </div>
    </main>
  );
}
