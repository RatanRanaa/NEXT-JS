import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import styles from '../../styles/Blog.module.css'

const Slug = () => {
    const [blog, setBlog] = useState()
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return
        const {Slug} = router.query;
        fetch(`http://localhost:3000/api/Getblog?Slug=${Slug}`).then((a)=>{
            return a.json();
        })
        .then((parsed)=>{
            setBlog(parsed)
        })
    }, [router.isReady])

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

export default Slug