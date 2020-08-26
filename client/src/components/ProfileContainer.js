import React from "react";
import ProfileSettings from "./ProfileSettings";
import UserMatches from "./UserMatches";
const renderProfileComponentSwitch = (currentPath) => {
  switch (currentPath) {
    case "/profile":
      return <ProfileSettings username="test_user" />;
      break;
    case "/profile/teams":
      return <div>teams</div>;
      break;
    case "/profile/matches":
      return <UserMatches />;
      break;
  }
};

const ProfileContainer = ({ pathname }) => {
  return (
    <div className="profile-container">
      {renderProfileComponentSwitch(pathname)}{" "}
    </div>
  );
};

export default ProfileContainer;
