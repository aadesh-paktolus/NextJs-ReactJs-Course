import Link from "next/link";
import AllNews from "../../../../../components/all-news/index";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "../../../../../lib/new";

const YearlyNewsPage = ({ params }) => {
  const filter = params.filter;
  console.log("filter", filter);
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = "No news found for the selected period!";

  if (news && news.length > 0) {
    newsContent = <AllNews news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <div id="archive-header">
        <ul>
          {links.map((item) => {
            console.log(item);
            const href = selectedYear
              ? `/archive/${selectedYear}/${item}`
              : `/archive/${item}`;
            return (
              <li key={item.id}>
                <Link href={href}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      {newsContent}
    </>
  );
};

export default YearlyNewsPage;
