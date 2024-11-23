import type { ReactNode } from "react";

export const articleData = {
  title: "A Message to Our Customers",
  url: "http://www.apple.com/customer-letter/",
  author: "epaga",
  num_comments: 967,
  story_id: null,
  story_title: null,
  story_url: null,
  parent_id: null,
  created_at: 1455698317,
};

export type Article = {
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

export interface ArticlesContextValue {
  articles: Article[];
}

export interface ArticlesProviderProps {
  children: ReactNode;
}
