import AllNews from "../../../components/all-news/index";
import { getAllNews } from "../../../lib/new";

const News = async () => {
  const newsData = await getAllNews();
  return <AllNews news={newsData} />;
};

export default News;
