import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileUser from "./ProfileUser";
import ProfileMenu from "./ProfileMenu";
import ProfileFooter from "./ProfileFooter";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileUser />
      <ProfileMenu />
      <button className="logout-button">Выйти</button>
      <ProfileFooter />
    </div>
  );
};

export default Profile;
