import { getLatestNews } from "../../../../lib/new";
import AllNews from "../.././../../components/all-news/index";

const LatestNewsPage = () => {
  const news = getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <AllNews news={news} />
    </>
  );
};

export default LatestNewsPage;
