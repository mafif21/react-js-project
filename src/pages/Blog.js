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

      document.title = "Blog";

      setArticles(data);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blogs</h1>
      <p className="section-title">Berikut ini adalah semua blog yang tersedia</p>

      {!loading ? (
        <div className="articles">
          {articles.map(article => {
            return (
              <article key={article.id} className="article">
                <h4 className="article-title">
                  <Link to={`/blog/blogdetail/${article.id}`}>{article.title}</Link>
                </h4>
                <p className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</p>
              </article>
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
