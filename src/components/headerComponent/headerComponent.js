import React, { useState } from 'react';
import './headerComponent.css'
import { useDispatch, useSelector } from 'react-redux';
 const HeaderComponent = React.memo(function(){
    const [searchInput,showSerchInput] = useState(false)
    const dispatch = useDispatch()

    let categoryName= useSelector(state => state.contentListing.title)


    return (
        <nav class="flex items-center justify-between flex-wrap nav-bar">
     
        {
      searchInput? 
      <div class="flex items-center border-b border-b-2 border-white-500 py-2 search-input">
      <input class="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search here" aria-label="Search here"
      
      onKeyDown={
          (event)=>{
              
              if(event.target.value.length>3){
                dispatch({type:'key-search',payload:{keyword:event.target.value,hasMore:false}})
              }
              if(event.keyCode==8 && event.target.value.length==0){
                dispatch({type:'key-search',payload:{keyword:'',hasMore:true}})

              }
          }
      }
      />
      
      <span class="flex-shrink-0 border-transparent border-4 text-white  hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={
          ()=>{
            showSerchInput(false)
            dispatch({type:'key-search',payload:{keyword:'',hasMore:true}})

          }
      }>
        Cancel
      </span>
    </div>


      :""
        }

           
    {!searchInput ? <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img class="search-icon pl-4" src="../../../public/Slices/Back.png"/>

    <span class="font-semibold  tracking-tight category-span">{categoryName}</span>
  </div>
  : ""
}
{ !searchInput ? <div class="flex items-center flex-shrink-0 text-white" onClick={()=>{
showSerchInput(true)
  }}>
      <img class="search-icon" src="../../../public/Slices/search.png"/>
  </div> :""} 

  
        </nav>
    )
})
export default HeaderComponent;