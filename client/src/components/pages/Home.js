import './Home.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddButton from './AddButton';
import Carousel, { CarouselItem } from '../Carousal';

export default function Home() {
  const pics = useSelector((state) => state.data.pics);
  const categoryNames = useSelector((state) => state.data.categories);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const selectionHandler = (cate, e) => {
    e.preventDefault();
    console.log(cate);
    const found = selectedCategory.includes(cate);
    if (found) {
      const filteredCategories = selectedCategory.filter((item) => item !== cate);
      setSelectedCategory(filteredCategories);
    }
    else {
      const filteredCategories = [...selectedCategory, cate];
      setSelectedCategory(filteredCategories);
    }
    
  }

  return (
    <React.Fragment>
  
     <div className='container' style={{backgroundColor:'#c73d991b'}}>
      {categoryNames.map((item) => (
        <div key={item} className={`form-control ${(selectedCategory.includes(item)) ? 'invalid' : ''}`}>
          <button onClick={(e) => selectionHandler(item, e)} > {item} </button>
        </div>
      ))}
      

      <Carousel>
        {pics.filter((item) => {
          if (!selectedCategory.length) {
            return item;
          } else if (selectedCategory.includes(item.category)) {
            return item;
          }
        }).map((item) => (
         
            <CarouselItem key={item.id}>
             <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                alt={item.title}
                onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
                onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}
              /> 
            </CarouselItem>
        
        ))
        }
      </Carousel>
      </div>
      <div className='container'> <h1>Want to upload photos to gallery?</h1>
     <AddButton categoryNames={categoryNames} />
     </div>
    </React.Fragment>
  );
}
