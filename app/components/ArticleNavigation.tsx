import Link from "next/link";

interface ArticleNavigationProps {
  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
}

export default function ArticleNavigation({
  previous,
  next,
}: ArticleNavigationProps) {
  return (
    <div className="mt-12 grid md:grid-cols-2 gap-4">

      <div>
        {previous && (
          <Link
            href={previous.href}
            className="block bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-yellow-400 transition"
          >
            <p className="text-zinc-500 text-sm mb-2">
              ← Previous Analysis
            </p>

            <h3 className="text-white font-semibold">
              {previous.title}
            </h3>
          </Link>
        )}
      </div>

      <div>
        {next && (
          <Link
            href={next.href}
            className="block bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-yellow-400 transition text-right"
          >
            <p className="text-zinc-500 text-sm mb-2">
              Next Analysis →
            </p>

            <h3 className="text-white font-semibold">
              {next.title}
            </h3>
          </Link>
        )}
      </div>

    </div>
  );
}