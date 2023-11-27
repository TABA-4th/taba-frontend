import React, { useCallback, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./UserMenu.module.css";
import { AuthContext } from "../functions/AuthContext"; // AuthContext 임포트

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext); // Context 사용

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => {
      setIsOpen(false);
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src="https://i.postimg.cc/V6yD0J9p/2815428.png" alt="유저 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          {isLoggedIn ? (
            <>
              <Link to="/wishlist">
                <li>위시리스트</li>
              </Link>
              <li onClick={logout}>로그아웃</li> {/* logout 함수 사용 */}
            </>
          ) : (
            <>
              <Link to="/register">
                <li>회원가입</li>
              </Link>
              <Link to="/login">
                <li>로그인</li>
              </Link>
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
