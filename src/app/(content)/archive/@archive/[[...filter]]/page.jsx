import Link from "next/link";
import { Suspense } from "react";
import AllNews from "../../../../../components/all-news/index";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "../../../../../lib/new";

const YearlyNewsPage = async ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = "No news found for the selected period!";

  if (news && news.length > 0) {
    newsContent = <AllNews news={news} />;
  }

  const availableNewsYears = await getAvailableNewsYears();

  if (
    (selectedYear && !availableNewsYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <header id="archive-header">
        <ul>
          {links.map((item) => {
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
      </header>
      <Suspense fallback={<p>Loading News...</p>}>{newsContent}</Suspense>
    </>
  );
};

export default YearlyNewsPage;
