import React, { useState} from 'react'
import styles from '../../styles/Blog.module.css'
import * as fs from 'fs'


const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)

    return <div>
        <main className={styles.main}>
            <h1>Title of the page {blog && blog.title}</h1>
            <hr />
            <div>
                {blog && blog.Content}
            </div>
        </main>
    </div>
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { Slug: 'how-to-learn-flask'} },
        { params: { Slug: 'how-to-learn-javaScript'} },
        { params: { Slug: 'how-to-learn-Reactjs'} }
    ],
      fallback: true, // can also be true or 'blocking'
    }
  }

export async function getStaticProps(context) {
    // console.log(context) 

        const {Slug} = context.params;
        // let data = await fetch(`http://localhost:3000/api/Getblog?Slug=${Slug}`)
        // let myBlog = await data.json()

        let myBlog = await fs.promises.readFile(`blogdata/${Slug}.json`, 'utf-8')
            // console.log(req.query.slug)
         
    return {
      props: {myBlog : JSON.parse(myBlog)}, // will be passed to the page component as props
    }
  }

export default Slug