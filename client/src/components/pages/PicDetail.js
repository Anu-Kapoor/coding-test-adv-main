import { Suspense } from 'react';
import { useRouteLoaderData, json, redirect, defer, Await, } from 'react-router-dom';
import PicItem from '../PicItem';
import PicsList from './PicsList';
import { getAuthToken } from '../../util/auth';

function PicDetailPage() {
  const { pic, pics } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={pic}>
          {(loadedPic) => <PicItem pic={loadedPic} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={pics}>
          {(loadedPics) => <PicsList pics={loadedPics} />}
        </Await>
      </Suspense>
    </>
  );
}

export default PicDetailPage;

async function loadPic(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadPics() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    pic: await loadPic(id),
    pics: loadPics(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete selected photo.' },
      {
        status: 500,
      }
    );
  }

  return redirect('/events');
}
