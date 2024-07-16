import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage(props) {
  const featuredEvents = props.featuredEvents;

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="Description"
          content="find lot of events that allow you to evelove..."
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const getAllEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: getAllEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
