import { createContext, useContext } from "react";
import type {
  Article,
  ArticlesContextValue,
  ArticlesProviderProps,
} from "./index.types";

const ArticlesContext = createContext<ArticlesContextValue | undefined>(
  undefined
);

const ArticlesProvider = ({ children }: ArticlesProviderProps) => {
  const articles: Article[] = [
    {
      title: "A Message to Our Customers",
      url: "http://www.apple.com/customer-letter/",
      author: "epaga",
      num_comments: 967,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1455698317,
    },
    {
      title:
        "“Was isolated from 1999 to 2006 with a 486. Built my own late 80s OS”",
      url: "http://imgur.com/gallery/hRf2trV",
      author: "epaga",
      num_comments: 265,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1418517626,
    },
  ];

  const value = {
    articles,
  };

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
};

const useArticlesContext = () => {
  const context = useContext(ArticlesContext);

  if (!context) {
    throw new Error("useArticlesContext must be inside the scope");
  }

  return context;
};

export { ArticlesProvider, useArticlesContext };
