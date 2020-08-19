import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import ProfileContainer from "../components/ProfileContainer";
const ProfilePage = () => {
  return (
    <section className="section section-profile">
      <ProfileNavbar />
      <ProfileContainer username="test_user" />
    </section>
  );
};

export default ProfilePage;
