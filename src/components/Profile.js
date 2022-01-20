import React from "react";
import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

const Profile = (props) => {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }
  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
};

export default Profile;
