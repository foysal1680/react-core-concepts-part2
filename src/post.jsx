import { use } from "react"
import Posts from "./posts"

export default function Post({fetchPost}){
    const posts=use(fetchPost)
    console.log(posts)
    return(
        <div className="card">

            <h2>All post are here:{posts.length}</h2>
            {
                posts.map(post=> <posts post={post}></posts>)
            }



        </div>
    )
}