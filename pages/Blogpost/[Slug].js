import { useRouter } from 'next/router'
import React from 'react'

const Slug = () => {
    const router = useRouter()
    const {Slug} = router.query;

    return <div>
        <main>
            <h1>Title of the page {Slug}</h1>
            <hr />
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, porro iste perspiciatis provident placeat magni temporibus dolore dolorum quaerat recusandae!
            </div>
        </main>
    </div>
}

export default Slug