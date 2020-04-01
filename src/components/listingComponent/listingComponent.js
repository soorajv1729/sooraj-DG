import { useSelector } from "react-redux"
import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import   './listingComponent.css'

 function ListingComponet(){
  let   contentList=(useSelector(state => state.contentListing.contentItems.content))
let totalEntry= useSelector(state => state.contentListing.pageSizeReturned)
let nextPage= useSelector(state => state.contentListing.pageNumRequested)

return(
  <React.Fragment>
    {
      contentList.length >0 ?
      <div class="flex flex-wrap -mb-4 listing-wrap">
      { contentList.map((ele, index) => (
       <div ey={index}  className={'w-1/3 px-2'+(index<3 ? ' single-list-first' : ' single-list')}>  
       <LazyLoadImage delayTime="700"
              effect="blur"
              src={ ele["poster-image"]=="posterthatismissing.jpg" ? '../public/Slices/placeholder_for_missing_posters.png': '../public/Slices/'+ele["poster-image"]}
              ></LazyLoadImage>
     <p class="list-text">{ele.name}</p>
       </div>
    
            
          ))
     }
    </div>
      : <div class="flex flex-wrap -mb-4 no-content"></div>
    }
 
  </React.Fragment>

)
  

}
export default ListingComponet