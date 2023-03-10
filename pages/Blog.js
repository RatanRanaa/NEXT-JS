import React, { useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from "fs"

const Blog = (props) => {
  console.log(props)
  const [Blogs, setBlogs] = useState(props.allBlogs)
  
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
export async function getStaticProps(context) {

  // let data = await fetch("http://localhost:3000/api/hello")
  // let allBlogs = await data.json()

  let data = await fs.promises.readdir("blogdata")
  let myfile;
  let allBlogs = []
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        console.log(myfile)
        allBlogs.push(JSON.parse(myfile))
    }

  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog

