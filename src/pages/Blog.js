import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      const data = await request.json();

      setArticles(data);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blogs</h1>

      {!loading ? (
        <div>
          {articles.map(article => {
            return (
              <section key={article.id}>
                <h4>
                  <Link to={`/blog/blogdetail/${article.id}`}>{article.title}</Link>
                </h4>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              </section>
            );
          })}
        </div>
      ) : (
        <div>
          <i>Loading Blog ....</i>
        </div>
      )}
    </section>
  );
}
