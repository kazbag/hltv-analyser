import React from "react";
import ProfileSettings from "./ProfileSettings";

const renderSwitch = (pathname) => {
  switch (pathname) {
    case "/profile":
      return <ProfileSettings username="test_user" />;
      break;
    case "/profile/teams":
      return <div>teams</div>;
      break;
    case "/profile/matches":
      return <div>matches</div>;
      break;
  }
};

const ProfileContainer = ({ pathname }) => {
  console.log(pathname);
  return <div className="profile-container">{renderSwitch(pathname)} </div>;
};

export default ProfileContainer;
