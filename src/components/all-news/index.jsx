import Link from "next/link";
import React from "react";

const AllNews = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((item) => {
        return (
          <li>
            <Link href={`/news/${item.slug}`}>
              <img src={`/images/news/${item.image}`} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AllNews;
