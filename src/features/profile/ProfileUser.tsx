import React from "react";


const ProfileUser: React.FC = () => {
  return (
    <div className="profile-user">
      <img
        src="https://41.img.avito.st/avatar/social/1024x1024/4933261541.jpg"
        alt="Avatar"
        className="profile-avatar"
      />
      <div className="profile-info">
        <h2>Ли Анатолий</h2>
        <p>(+1) 234 567 890</p>
      </div>
    </div>
  );
};

export default ProfileUser;
