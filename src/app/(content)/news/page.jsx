import AllNews from "../../../components/all-news/index";
import { getAllNews } from "../../../lib/new";

const News = () => {
  const news = getAllNews();
  return <AllNews news={news} />;
};

export default News;
