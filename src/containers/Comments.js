import React from 'react'
import CommentItem from '../components/comments/CommentItem'



const Comments = (props) => {
	let {listItems, removeItemFromList, markTaskCompleted, likeSubmitter }=props
// 	let listContent=listItems.map((item, index)=>{	
// 		return (
			
// 				<CommentItem 
// 					key={index}
// 					item={item}
// 					removeItemFromList={()=>{removeItemFromList(index)}}
// 					markTaskCompleted={()=>{markTaskCompleted(index)}}
// 					likeSubmitter={()=>{likeSubmitter(index)}}
// 	 			 />
			
// 	)
// })
console.log(listItems);


return(
    <div>
       
         {listContent}
        
    </div>
)
}


export default Comments


