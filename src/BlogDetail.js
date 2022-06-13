import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getDetail() {
      const data = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

      if (!data.ok) {
        return setNotFound(true);
      }

      const response = await data.json();

      setArticle(response);
      setLoading(false);
    }

    getDetail();
  }, [params]);

  if (notFound) {
    return <h1>Empty Data</h1>;
  }

  return (
    <section>
      <h1>Blog Detail</h1>

      {!loading ? (
        <section>
          <h1>{article.title}</h1>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.summary}</p>
          <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
          <p>
            Source:{" "}
            <a href={article.url} target="_Blank" rel="noreferrer">
              {" "}
              {article.newsSite}
            </a>
          </p>
        </section>
      ) : (
        <section>
          <i>Loading Blog ....</i>
        </section>
      )}
    </section>
  );
}
