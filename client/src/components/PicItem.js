import { useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from './PicItem.module.css';

function PicItem({pic}) {
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.event}>
      <img
                src={`${pic.url}?w=248&fit=crop&auto=format`}
                alt={pic.title}
                onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
                onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}
              />  
     
      {token && (
        <menu className={classes.actions}>
          {/* <Link to="edit">Edit</Link> */}
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default PicItem;
