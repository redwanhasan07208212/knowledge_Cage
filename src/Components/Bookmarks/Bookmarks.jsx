import PropTypes from 'prop-types'
import Bookmark from '../../Bookmark/Bookmark';
export default function Bookmarks({bookmarks,readingTime}){
    return (
        <div className="md:w-1/3 bg-gray-300 p-8 text-2xl font-bold mt-6 rounded-lg ml-6">
            <h1 className="border-2 border-solid border-[#6047EC] text-[#6047EC] py-6 px-12 mb-6">Spent time on read : {readingTime}</h1>
            <h1>Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}