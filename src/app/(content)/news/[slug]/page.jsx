import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "../../../../lib/new";

const NewsDetailPage = async ({ params }) => {
  const data = await getNewsItem(params.slug);
  if (!data) {
    notFound();
  }

  return (
    <div className="news-article">
      <header>
        <Link href={`/news/${params.slug}/image`}>
          <img src={`/images/news/${data.image}`} alt={data.title} />
        </Link>
        <h1>{data.title}</h1>
        <time dateTime="date">{data.date}</time>
      </header>
      <p>{data.content}</p>
    </div>
  );
};

export default NewsDetailPage;
