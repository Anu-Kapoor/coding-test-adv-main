import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { getAuthToken } from '../util/auth';
import classes from './EventForm.module.css';

function EventForm({photos, method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const pics = photos;
  console.log("photos", photos);
  const reducedPics = pics.reduce((acc, current) => {
    const x = acc.find(item => item.category === current.category);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  
const categoryNames=reducedPics.map(a=>a.category);

  
  // const dispatch = useDispatch();
  // const categoryNames = useSelector((state) => state.data.categories);
  const [catInput, setCatInput] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState(categoryNames[0]);

    const handleChange = (value) => {
        setSelectedOption(value);
        if (value === "false") { setCatInput(true); }
        else { setCatInput(false); }
    }


  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {/* <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ''}
        />
      </p> */}
      <p>
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="category">Choose category:</label>
        <select name="category" id="category" value={selectedOption} onChange={e => handleChange(e.target.value)}>
                    {categoryNames.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                    <option value={false}>Add new category</option>
                </select>
                <br />
                {catInput && (
                    <>
                        <label htmlFor="categoryName">Category:  </label>
                        <input
                            id="categoryName"
                            type="text"
                            name="categoryName"
                            placeholder="category..."
                            // value={newCategory}
                            // onChange={e => setNewCategory(e.target.value)}
                        />
                    </>
                )}
      </p>

      {/* <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ''}
        />
      </p> */}
      
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;





export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  console.log(method, "ACTION LOG", data.get('category'), data.get('categoryName'));

  const eventData = {
    category: (data.get('category')=== "false")? data.get('categoryName'): data.get('category'),
    url: data.get('image'),
    // date: data.get('date'),
    // description: data.get('description'),
  };

  let url = 'http://localhost:8080/events';

  // if (method === 'PATCH') {
  //   const eventId = params.eventId;
  //   url = 'http://localhost:8080/events/' + eventId;
  // }

  const token = getAuthToken();
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 });
  }

  return redirect('/events');
}

