import { supabase } from '@/supabase/client';
import { PostType } from '@/types/schema';

export async function getAllPosts(): Promise<PostType[]> {
  const { data, error } = await supabase.from('Posts').select('*');

  if (error) {
    throw new Error(`There was an error fetching the data: ${error.message}`);
  }

  return data;
}
