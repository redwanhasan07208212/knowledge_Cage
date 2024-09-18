import {useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Blog from './Blog';
export default function Blogs({handleAddtoBookmark,handleReadingTime}){
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, []);
    return (
        <div className="md:w-2/3">
        {
            blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddtoBookmark={handleAddtoBookmark} handleReadingTime={handleReadingTime}></Blog>)
        }
        </div>
    );
}
Blogs.propTypes = {
    handleAddtoBookmark:PropTypes.func,
    handleReadingTime:PropTypes.func
}