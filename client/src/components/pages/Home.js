import './Home.css';
import { Suspense } from 'react';
import PicsList from './PicsList';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

export default function Home() {
  const { pics } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading PICS...</p>}>
      <Await resolve={pics}>
        {(loadedPics) => <PicsList pics={loadedPics} />}
      </Await>
    </Suspense>
  );
}

async function loadPics() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {

    throw json(
      { message: 'Could not fetch pics.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    pics: loadPics(),
  });
}

