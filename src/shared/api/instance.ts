import axios from "axios";
import type { Post } from "@/entities/post/model";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await instance.get("/posts");
  return response.data;
};

export const fetchPost = async (id: number): Promise<Post> => {
  const response = await instance.get(`/posts/${id}`);
  return response.data;
};
