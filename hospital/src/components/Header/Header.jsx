import React from 'react'
import styles from './Header.module.css'
const Header = ({title, page, info}) => {

  return (
    <section id={styles.header}>
      <p className={`h1 ${styles.h1}`}>{title}</p>
      <p><span>{page}</span> - {info}</p>
    </section>
  )
}

export default Header
