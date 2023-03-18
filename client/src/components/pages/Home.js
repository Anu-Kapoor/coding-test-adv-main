import './Home.css';
import {Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import PicsList from './PicsList';
import AddButton from './AddButton';
import Carousel, { CarouselItem } from '../Carousal';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

export default function Home() {
  const { pics } = useLoaderData();
  console.log("inside Home pics", pics);
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
  console.log(response, "LOG Response for pics");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch pics.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    console.log("pics reposne data", resData.events);
    return resData.events;
  }
}

export function loader() {
  return defer({
    pics: loadPics(),
  });
}

