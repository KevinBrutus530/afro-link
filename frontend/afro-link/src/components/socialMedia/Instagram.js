import React from "react";
import  InstagramEmbed  from "react-instagram-embed";

const Instagram = ({ igUrl }) => {
  return (
    <div>
      <InstagramEmbed
        url={igUrl}
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
};

export default Instagram;
