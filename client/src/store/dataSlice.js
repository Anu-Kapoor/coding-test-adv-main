import { createSlice } from '@reduxjs/toolkit';
import PicsData from '../Assets/PicsData';
import { act } from '@testing-library/react';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    pics: PicsData,
    categories: ["cat", "dog", "whale"],
    // quotes: [],
    // selectedPic: null,
    // items: [],
    // changed: false,
  },
  reducers: {

    addData(state, action) {
      state.pics.push(action.payload);

      if(!state.categories.includes(action.payload.category))
      {state.categories.push(action.payload.category)}
   
      // const reducedPics = state.pics.reduce((acc, current) => {
      //   const x = acc.find(item => item.category === current.category);
      //   if (!x) {
      //     return acc.concat([current]);
      //   } else {
      //     return acc;
      //   }
      // }, []);

      // state.categories = reducedPics.map((item) => item.category);
  
    },

    sendCategories(state, action){
    //  state.categories = action.payload.items;
    }

   
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;