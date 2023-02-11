import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
  return (
    <>
    <nav className={styles.nav}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
        </ul>
    </nav>
    <hr />
    </>
  )
}

export default Navbar

