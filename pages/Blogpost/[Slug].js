import React, { useState} from 'react'
import styles from '../../styles/Blog.module.css'

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

export async function getServerSideProps(context) {
    // console.log(context) 

        const {Slug} = context.query;
        let data = await fetch(`http://localhost:3000/api/Getblog?Slug=${Slug}`)
        let myBlog = await data.json()
         
    return {
      props: {myBlog}, // will be passed to the page component as props
    }
  }

export default Slug