import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListingComponet from './components/listingComponent/listingComponent'
import HeaderComponent from './components/headerComponent/headerComponent';

 function App () {
  const dispatch = useDispatch()
  let totalEntry= useSelector(state => state.contentListing.pageSizeReturned)
  let nextPage= useSelector(state => state.contentListing.pageNumRequested)
  let hasMore= useSelector(state => state.contentListing.hasMore)
 
  
  return( 
    <div>
        <HeaderComponent/>
        <InfiniteScroll dataLength={totalEntry}   hasMore={hasMore}    height={640}   next={()=>{
        
        dispatch({ type: 'page-load-'+nextPage })
      }}> 
<ListingComponet/>
    </InfiniteScroll>
    </div>

   )




  
}
export default App;
