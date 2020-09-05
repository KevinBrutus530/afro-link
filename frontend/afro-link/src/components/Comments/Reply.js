import React from 'react'

const Reply =({allReviews, replyID})=> {
    // debugger
    let showReviewsRely = allReviews.map((post, i) => {
        if(replyID===post.reply_id){
          return (
            <div style={{ color: "white" }} key={post.id} className="ReplySect">
              <div>
                <h5 className="reply_Name">Reply by: {post.name.toUpperCase()}</h5>
              </div>
              <p className="reply_Text"> {post.reply_text}</p>
              <p className="reply_TextDT">{post.dt.substring(0,10)}</p>
            </div>
          );
        }
      });

        return (
            <div>
                {showReviewsRely}
            </div>
        )
    }


export default Reply
