import { Outlet } from 'react-router-dom';

import EventsNavigation from '../layout/EventsNavigation';

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
