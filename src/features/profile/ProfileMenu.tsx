import React from "react";

const ProfileMenu: React.FC = () => {
  return (
    <ul className="profile-menu">
      <li className="menu-item">
        <span>👤</span> Мой аккаунт
      </li>
      <li className="menu-item">
        <span>⭐</span> Мои отзывы
      </li>
      <li className="menu-item">
        <span>📝</span> Оставить отзыв о покупке
      </li>
      <li className="menu-item">
        <span>💬</span> Поддержка
      </li>
    </ul>
  );
};

export default ProfileMenu;
