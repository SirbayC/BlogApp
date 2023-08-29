import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios"
import DefaultNoPostPic from "../img/defaultNoImgPost.jpg"
import DOMPurify from "dompurify";


const Home = () => {
    const [posts, setPosts] = useState([])

    const catQuery = useLocation().search

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${catQuery}`)
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [catQuery])

    return (
        <div className='home'>
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            {post.img ? <img src={`../uploads/${post.img}`} alt="" /> : <img src={DefaultNoPostPic} alt="" />}
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(post.desc),
                                }}
                            ></p>
                            <Link className='link' to={`/post/${post.id}`}>
                                <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home