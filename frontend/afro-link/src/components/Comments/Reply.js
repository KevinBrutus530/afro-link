import React from 'react';

const Reply = ({ allReviews, replyID }) => {
  let showReviewsRely = allReviews.map((post, i) => {
    if (replyID === post.reply_id) {
      return (
        <div
          style={{ color: 'whitesmoke' }}
          key={post.id}
          className="ReplySect"
        >
          <div className="ownerReplyContainer">
            <h5 className="reply_Name">
              Reply by:{' '}
              <p style={{ fontWeight: 'bold' }}>{post.name.toUpperCase()}</p>
            </h5>
            <p className="reply_TextDT">{post.dt.substring(0, 10)}</p>
          </div>
          <p className="reply_Text"> {post.reply_text}</p>
        </div>
      );
    }
  });

  return <div>{showReviewsRely}</div>;
};

export default Reply;
