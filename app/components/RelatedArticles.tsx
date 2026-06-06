import Link from "next/link";

const articles = [
  {
    title: "Gold Analysis Today – 5 June 2026",
    href: "/analysis/gold-analysis-2026-06-05",
  },
  {
    title: "Gold Analysis Today – 4 June 2026",
    href: "/analysis/gold-analysis-2026-06-04",
  },
  {
    title: "Gold Analysis Today – 3 June 2026",
    href: "/analysis/gold-analysis-2026-06-03",
  },
];

export default function RelatedArticles() {
  return (
    <section className="mt-16 border-t border-zinc-800 pt-10">

      <h2 className="text-2xl font-bold text-yellow-400 mb-6">
        Related Gold Analysis
      </h2>

      <div className="grid gap-4">

        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-yellow-400 transition"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {article.title}
            </h3>

            <span className="text-yellow-400">
              Read Analysis →
            </span>
          </Link>
        ))}

      </div>

    </section>
  );
}