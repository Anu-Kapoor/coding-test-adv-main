import React, { useState } from 'react';
import AddNew from '../Add';
import './Home.css';

function AddButton({ categoryNames }) {

    const [isAdding, setIsAdding] = useState(false);

    const addForm = () => {
        setIsAdding(true);
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