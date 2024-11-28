import React from "react";

import ProfileHeader from "./ProfileHeader";
import ProfileFooter from "./ProfileFooter";
import ProfileUser from "./ProfileUser";
import ProfileMenu from "./ProfileMenu";


const Profile: React.FC = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileUser />
      <ProfileMenu />
      <ProfileFooter />
    </div>
  );
};

export default Profile;
