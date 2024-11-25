import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileUser from "./ProfileUser";
import ProfileMenu from "./ProfileMenu";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileUser />
      <ProfileMenu />
    </div>
  );
};

export default Profile;
