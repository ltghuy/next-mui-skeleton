import { apiInstance } from '@/libs/axios';
import { Post } from '@/models/post/entities';

const getAll = async (url: string) => {
  return (await apiInstance.get<Post[]>(url)).data;
};

export const postService = {
  getAll,
};
