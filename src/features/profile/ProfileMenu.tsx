import React from "react";


const ProfileMenu: React.FC = () => {
  const handleClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  return (
    <ul className="profile-menu">
      <li className="menu-item" onClick={() => handleClick("Мой аккаунт")}>
        👤 Мой аккаунт
      </li>
      <li className="menu-item" onClick={() => handleClick("Мои отзывы")}>
        ⭐ Мои отзывы
      </li>
      <li className="menu-item" onClick={() => handleClick("Оставить отзыв о покупке")}>
        📝 Оставить отзыв о покупке
      </li>
      <li className="menu-item" onClick={() => handleClick("Поддержка")}>
        💬 Поддержка
      </li>
    </ul>
  );
};

export default ProfileMenu;
