import "./Profile.css";

import React from "react";


const Profile: React.FC = () => {
  return (
    <div className="profile">
      <header className="profile-header">
        <h1>Профиль</h1>
      </header>

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

      <button className="logout-button">Выйти</button>

      <footer className="profile-footer">
        <nav>
          <ul className="footer-menu">
            <li>🏠</li>
            <li>❤️</li>
            <li>📚</li>
            <li>👤</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Profile;
