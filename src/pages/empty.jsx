import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './WishlistPage.module.css';

function Empty() {

  return (
    <div>
      <h1 className={styles.title}>나의 Empty</h1>
      <div className={styles.title}>테스트용도</div>
    </div>
  );
}

export default Empty;

