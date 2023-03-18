import EventForm from "../EventForm";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
function NewEventPage() {
  const { pics } = useLoaderData();


  
  
  return( 
  
  <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading form...</p>}>
  <Await resolve={pics}>
    {(loadedPics) => <EventForm photos={loadedPics} method="post" />}
  </Await>
</Suspense>
  )
  
}

export default NewEventPage;

