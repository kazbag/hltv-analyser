import React from "react";

const ProfileSettings = ({ username }) => {
  return (
    <ul className="list list--ul profile__data__list">
      <li className="list-item profile__data__list-item profile__data__list-item--username">
        Hello, {username}!
      </li>
      <li className="list-item profile__data__list-item">
        Wanna change your data?
      </li>
      <li className="list-item profile__data__list-item"></li>
    </ul>
  );
};

export default ProfileSettings;
