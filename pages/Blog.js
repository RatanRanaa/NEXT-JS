import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
    <div className={styles.Blog}>
        <h1>Blog post</h1>
        <Link href={"/Blogpost/learn-javaScript"} ><h3>Product 1</h3></Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, repudiandae maiores magnam fugiat sint vitae ut veniam tenetur animi eligendi nobis in labore, autem ipsum sed expedita commodi. Mollitia, corrupti. Reiciendis tempora quae voluptate nostrum aliquid harum nesciunt? Aliquam, amet corporis? Fugiat, rem exercitationem hic pariatur ullam quibusdam aliquam sunt.</p>
        <h3>Product 2</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, repudiandae maiores magnam fugiat sint vitae ut veniam tenetur animi eligendi nobis in labore, autem ipsum sed expedita commodi. Mollitia, corrupti. Reiciendis tempora quae voluptate nostrum aliquid harum nesciunt? Aliquam, amet corporis? Fugiat, rem exercitationem hic pariatur ullam quibusdam aliquam sunt.</p>
        <h3>Product 3</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, repudiandae maiores magnam fugiat sint vitae ut veniam tenetur animi eligendi nobis in labore, autem ipsum sed expedita commodi. Mollitia, corrupti. Reiciendis tempora quae voluptate nostrum aliquid harum nesciunt? Aliquam, amet corporis? Fugiat, rem exercitationem hic pariatur ullam quibusdam aliquam sunt.</p>
    </div>
    </>
  )
}

export default Blog