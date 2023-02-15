import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  const [Blogs, setBlogs] = useState([])
  useEffect(() => {
    console.log("is running")
    fetch("http://localhost:3000/api/hello").then((a)=>{
      return a.json();})
      .then((parsed)=>{
        console.log(parsed)
        setBlogs(parsed)
      })
    },[])
  
  return (
    <>
    <div className={styles.Blog}>
      {Blogs.map((blogitem)=>{
        return <div key={blogitem.Slug}>
          {/* <h1>{blogitem.title}</h1> */}
          <Link href={`/Blogpost/${blogitem.Slug}`} ><h3 className={styles.blogitem3}>{blogitem.title}</h3></Link>
          <h6>{blogitem.Content}</h6>
        </div>
      })}
    </div>
    </>
  )
}

export default Blog