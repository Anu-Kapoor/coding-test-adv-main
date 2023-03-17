import React, { useState } from 'react';
import { useRouteLoaderData, useNavigate } from 'react-router-dom';
 
import AddNew from '../Add';
import './Home.css';

function AddButton({ categoryNames }) {
    const token = useRouteLoaderData('root');
    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);

    const addForm = () => {
        if (token) 
        {setIsAdding(true);}
        else if (!token){
             navigate("/auth");
             console.log("navigate");
        }
        
    }

    const onCancel = () => {
        setIsAdding(false);
    }
    return (
        <React.Fragment>
          
           <button onClick={addForm}>Add New </button>
         
            {isAdding && (<AddNew categoryNames={categoryNames} onCancel={onCancel} />)}

        </React.Fragment>
    );
};

export default AddButton;