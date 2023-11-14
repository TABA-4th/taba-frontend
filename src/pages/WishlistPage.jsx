import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './WishlistPage.module.css';

function WishlistPage() {

  return (
    <div>
      <h1 className={styles.title}>나의 위시리스트</h1>
      <div className={styles.title}>위시리스트 추가 바람..</div>
    </div>
  );
}

export default WishlistPage;
