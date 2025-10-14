'use client';

import styles from './styles.module.css';
import '../assets/global.css';
import { useEffect, useState } from 'react';
import Post from '@/components/post';
import { getAllPosts } from '@/supabase/query';
import { PostType } from '@/types/schema';

export default function Home() {
  const [postData, setPostData] = useState<PostType[] | null>(null);

  async function fetchPostData() {
    // TODO: Fetch data using the supabase client
    const data = await getAllPosts();
    console.log(data); // to check and see if it works

    // TODO: Format data into the Post type
    return data as PostType[];
  }

  // useEffect with an empty dependency array runs only once after the component is first rendered
  useEffect(() => {
    const fetchData = async () => {
      const fetchedPost = await fetchPostData();

      setPostData(fetchedPost);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once

  // Render the fetched data
  return (
    <main className={styles.main}>
      <div>
        {postData == null ? (
          // If there is no postData, render a loading state
          <p>Loading...</p>
        ) : (
          // ... Render data within our component structure
          // Hint: use a map to loop through our array and render each object as a component!
          postData.map(post => (
            <Post
              id={post.id}
              key={post.id}
              username={post.username}
              text={post.text}
              date={post.date}
              image={post.image}
              likeCount={post.likeCount}
            />
          ))
        )}
      </div>
    </main>
  );
}

//   return (
//     <main className={styles.main}>
//       <div className={styles.content}>
//         <div className={styles.post}>
//           <div className={styles.topLine}>
//             <div className={styles.picAndName}>
//               <ProfileIcon size={24} className={styles.pic} />
//               <p className={styles.name}>rbeggs</p>
//             </div>
//             <p className={styles.date}>September 19</p>
//           </div>

//           <p className={styles.textContent}>
//             In response to the growing homelessness crisis in San Francisco, a
//             local nonprofit organization, Code Tenderloin, has launched a
//             comprehensive initiative aimed at providing long-term solutions for
//             individuals experiencing homelessness. The organization, founded in
//             2015, is dedicated to addressing both immediate needs and underlying
//             causes of homelessness through a combination of shelter services,
//             job training programs, and mental health support. Read more online:
//             https://www.codetenderloin.org/
//           </p>

//           <div>
//             <Image
//               src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
//               alt="Picture"
//               width={325}
//               height={231}
//               className={styles.image}
//             />
//           </div>

//           <div className={styles.responses}>
//             <div className={styles.likesAndHeart}>
//               <HeartIcon size={24} />
//               <p className={styles.likes}>256 Likes</p>
//             </div>

//             <ShareIcon size={24} />
//           </div>
//         </div>

//         <div className={styles.topLine}>
//           <div className={styles.picAndName}>
//             <ProfileIcon size={24} />
//             <p className={styles.name}>daviddd</p>
//           </div>
//           <p className={styles.date}>September 20</p>
//         </div>

//         <p className={`${styles.textContent} ${styles.textResponses}`}>
//           This organization is doing amazing work tackling the complex root
//           causes of the issue.
//         </p>

//         <div className={styles.topLine}>
//           <div className={styles.picAndName}>
//             <ProfileIcon size={24} />
//             <p className={styles.name}>vppraggie</p>
//           </div>

//           <p className={styles.date}>September 21</p>
//         </div>

//         <p className={`${styles.textContent} ${styles.textResponses}`}>
//           Thanks for sharing!
//         </p>
//       </div>
//     </main>
//   );
// }
