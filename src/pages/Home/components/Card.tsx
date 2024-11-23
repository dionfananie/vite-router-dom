import { useArticlesContext } from "../../../contexts/articles";

const Card = () => {
  const { articles } = useArticlesContext();

  return (
    <div>
      {articles.map((article) => {
        return <p>{article.title}</p>;
      })}
    </div>
  );
};

export default Card;
