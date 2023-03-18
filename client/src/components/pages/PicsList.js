import './Home.css';
import React, { useState } from 'react';
import AddButton from './AddButton';
import Carousel, { CarouselItem } from '../Carousal';
import { Link } from 'react-router-dom';

export default function PicsList({pics}) {
 
  //const categoryNames = useSelector((state) => state.data.categories);
  const [selectedCategory, setSelectedCategory] = useState([]);

   const reducedPics = pics.reduce((acc, current) => {
        const x = acc.find(item => item.category === current.category);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      

const categoryNames=reducedPics.map(a=>a.category);



  const selectionHandler = (cate, e) => {
   
    e.preventDefault();
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
      <div className='form-control'>
      {categoryNames.map((item) => (
     //   <div key={item} className={`form-control ${(selectedCategory.includes(item)) ? 'invalid' : ''}`}>
          <button key={item} 
          className={`btn ${(selectedCategory.includes(item)) ? 'invalid' : ''}`} 
          onClick={(e) => selectionHandler(item, e)} > 
          {item} 
          </button>
    //    </div>
      ))}
      </div>
      

      <Carousel>
        {pics.filter((item) => {
          if (!selectedCategory.length) {
            return item;
          } else if (selectedCategory.includes(item.category)) {
            return item;
          }
        }).map((item) => (
         
            <CarouselItem key={item.id}>
              <Link to={`/events/${item.id}`}>
             <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                alt={item.title}
                onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
                onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}
              /> 
              </Link>
            </CarouselItem>
        
        ))
        }
      </Carousel>
      </div>
      {/* <div className='container'> <h1>Want to upload photos to gallery?</h1>
     <AddButton categoryNames={categoryNames} />
     </div> */}
    </React.Fragment>
  );
}

