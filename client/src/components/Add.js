import React, { useState } from 'react';
import ModalWin from './UI/modalWin';
import { useDispatch } from 'react-redux';
import { dataActions } from '../store/dataSlice';
import classes from './Add.module.css';

function AddNew({ categoryNames, onCancel }) {
    const [URL, setURL] = useState("");
    const [catInput, setCatInput] = useState(false);
    const [newCategory, setNewCategory] = useState("");
    const [selectedOption, setSelectedOption] = useState(categoryNames[0]);
    const dispatch = useDispatch();
    const handleChange = (value) => {
        setSelectedOption(value);
        if (value === "false") { setCatInput(true); }
        else { setCatInput(false); }
    }

    const handleUpdate = e => {
        e.preventDefault();
        const picData = {
            id: Math.floor(Math.random() * 10000),
            url: URL,
            category: (selectedOption === "false") ? newCategory : selectedOption,
        };
        dispatch(dataActions.addData(picData));
        onCancel();
    }

    return (
        <ModalWin onCancel={onCancel} >
            <form onSubmit={handleUpdate} className={classes.input}>
                <h1>Add new photo to gallery</h1>
                <label htmlFor="URL">URL:  </label>
                <input
                    id="url"
                    type="text"
                    name="url"
                    placeholder="url..."
                    value={URL}
                    onChange={e => setURL(e.target.value)}
                />
                <br />
                <label htmlFor="categories">Choose category:  </label>
                <select value={selectedOption} onChange={e => handleChange(e.target.value)}>
                    {categoryNames.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                    <option value={false}>Add new category</option>
                </select>
                <br />
                {catInput && (
                    <>
                        <label htmlFor="newCat">Category:  </label>
                        <input
                            id="categoryName"
                            type="text"
                            name="categoryName"
                            placeholder="category..."
                            value={newCategory}
                            onChange={e => setNewCategory(e.target.value)}
                        />
                    </>
                )}
                <div style={{ marginTop: '30px' }}>
                    {URL && <input type="submit" value="ADD" />}
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={onCancel}
                    />
                </div>
            </form>
        </ModalWin>
    )
}

export default AddNew;