import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import ProfileContainer from "../components/ProfileContainer";

const ProfilePage = ({ history, username }) => {
  return (
    <section className="section section-profile">
      <ProfileNavbar />
      <ProfileContainer
        username="test_user"
        pathname={history.location.pathname}
      />
    </section>
  );
};

export default ProfilePage;
