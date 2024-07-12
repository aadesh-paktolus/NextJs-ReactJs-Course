import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage(props) {
  const featuredEvents = props.featuredEvents;

  return (
    <div>
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
