import React from "react";

const ProfileUser: React.FC = () => {
  return (
    <div className="profile-user">
      <img
        src="https://via.placeholder.com/80" // Замените на ссылку на аватарку
        alt="Avatar"
        className="profile-avatar"
      />
      <div className="profile-info">
        <h2>Пётр Петров</h2>
        <p>(+1) 234 567 890</p>
      </div>
    </div>
  );
};

export default ProfileUser;
