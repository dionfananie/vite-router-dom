import { create } from "zustand";

type Article = {
  title: string;
  url: string;
  author: string;
  num_comments: number;
  story_id: number | null;
  story_title: string | null;
  story_url: string | null;
  parent_id: string | null;
  created_at: number;
};
type Store = {
  count: number;
  articles: Article[];
  add: () => void;
  addArticles: (item: Article) => void;
};

export const useStore = create<Store>((set) => ({
  count: 1,
  articles: [],
  add: () => set((state) => ({ count: state.count + 1 })),
  addArticles: (item: Article) =>
    set((state) => ({ articles: [...state.articles, item] })),
}));
