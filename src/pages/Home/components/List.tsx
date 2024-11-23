import { useArticlesContext } from "../../../contexts/articles";

const List = () => {
  const { articles } = useArticlesContext();
  return (
    <div>
      <div>
        {articles.map((article) => {
          return <p>{article.title}</p>;
        })}
      </div>
    </div>
  );
};

export default List;
