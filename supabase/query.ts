import { supabase } from '@/supabase/client';
import { PostType } from '@/types/schema';

interface Post {
  id: BigInt;
  username: Text;
  text: Text;
  date: Date;
  image: Text;
  likeCount: BigInt;
}

export async function getAllPosts(): Promise<PostType[]> {
  const { data, error } = await supabase.from('Posts').select('*');

  if (error) {
    throw new Error(`There was an error fetching the data: ${error.message}`);
  }

  return data;
}
