import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">HomePage</h1>
      <p className="section-desc">Hello, Selamat Datang Kembali Blogger</p>
    </section>
  );
}
