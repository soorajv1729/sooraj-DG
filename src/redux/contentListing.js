import * as pageOne from '../redux/API/CONTENTLISTINGPAGE-PAGE1.json'
import * as pageTwo from '../redux/API/CONTENTLISTINGPAGE-PAGE2.json'
import * as pageThree from '../redux/API/CONTENTLISTINGPAGE-PAGE3.json'

let iniitialState ={
    title: pageOne.default.page.title,
    totalContentItems:pageOne.default.page['total-content-items'],
    contentItems: {
        content: pageOne.default.page['content-items'].content
    },
    pageSizeReturned:pageOne.default.page['total-content-items'],
    pageNumRequested:"2",
    hasMore:true
}
export default function contentListing(state=iniitialState,action){
    console.log(action.type,"ppp");
    console.log(action.payload,"sasss");

switch (action.type){
case "page-load-2":
    let content=state.contentItems.content.concat(pageTwo.default.page['content-items'].content)
    return {...state,title: pageTwo.default.page.title,
    totalContentItems:pageTwo.default.page['total-content-items'],
    contentItems: {
        content: content
    },
    pageSizeReturned:pageTwo.default.page['total-content-items'],
    pageNumRequested:3,
}
    break;
    case "page-load-3":
        let contentThree=state.contentItems.content.concat(pageThree.default.page['content-items'].content)
        return {...state,title: pageThree.default.page.title,
        totalContentItems:pageTwo.default.page['total-content-items'],
        contentItems: {
            content: contentThree
        },
        pageSizeReturned:pageTwo.default.page['total-content-items'],
        hasMore:false

    }
        break;
    
    case "key-search":
        //console.log(state.contentItems.content,"ssss");
      let allContents=  pageOne.default.page['content-items'].content.concat(pageTwo.default.page['content-items'].content).concat(pageThree.default.page['content-items'].content);
       let  contentFiltered=   allContents.filter((ele)=>{
           let name=action.payload.keyword;
          if( ele.name.search( new RegExp(name, 'gi'))>-1){
                
                return ele
            }
        })
  
    
    return {...state,
    totalContentItems:pageTwo.default.page['total-content-items'],
    contentItems: {
        content: contentFiltered
    },
    pageSizeReturned:contentFiltered.length,
    pageNumRequested:contentFiltered.length,
    hasMore:action.payload.hasMore
}
    break;

    default:     return state;

}    

}