import React from "react";


const ProfileFooter: React.FC = () => {
  const handleClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  return (
    <footer className="profile-footer">
      <nav>
        <ul className="footer-menu">
          <li onClick={() => handleClick("Домой")}>🏠</li>
          <li onClick={() => handleClick("Избранное")}>❤️</li>
          <li onClick={() => handleClick("Сохраненное")}>📚</li>
          <li onClick={() => handleClick("Профиль")}>👤</li>
        </ul>
      </nav>
    </footer>
  );
};

export default ProfileFooter;
