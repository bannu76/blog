import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {item} = props
  console.log(item)

  return (
    <li className="blog-li">
      <Link className="link-decor" to={`/blogs/${item.id}`}>
        <div className="blog-item">
          <img className="blog-image" src={item.imageUrl} alt="title" />
          <div className="blog-details-container">
            <p className="blog-topic">{item.topic}</p>
            <h1 className="blog-title">{item.title}</h1>
            <div className="blog-author-container">
              <img className="avatar" src={item.avatarUrl} alt="author" />
              <p>{item.author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
