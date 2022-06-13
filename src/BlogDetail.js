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
    return <h1 className="section-title">Empty Data</h1>;
  }

  return (
    <section className="section">
      <h1 className="section-title">Blog Detail</h1>

      {!loading ? (
        <article className="article">
          <h1 className="article-title">{article.title}</h1>
          <p className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</p>
          <img src={article.imageUrl} alt={article.title} className="article-image" />
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">
            Source:
            <a href={article.url} target="_Blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </article>
      ) : (
        <section>
          <i>Loading Blog ....</i>
        </section>
      )}
    </section>
  );
}
