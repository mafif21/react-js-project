import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetail() {
      const data = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
      const response = await data.json();

      setArticle(response);
      setLoading(false);
    }

    getDetail();
  }, [params]);

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
            <a href={article.url} target="_Blank" rel="noreferrer">
              Link
            </a>
          </p>
        </section>
      ) : (
        <section></section>
      )}
    </section>
  );
}
