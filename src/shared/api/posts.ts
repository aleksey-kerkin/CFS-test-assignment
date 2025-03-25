import axios from "axios";
import type { Post } from "../../entities/post/types";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const { data } = await axios.get<Post[]>(API_URL);
    return data;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    return [];
  }
};

export const getPostById = async (id: number): Promise<Post | null> => {
  try {
    const { data } = await axios.get<Post>(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching post ${id} `, error);
    return null;
  }
};
