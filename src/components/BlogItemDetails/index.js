import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, blogLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const blog = {
      author: data.author,
      id: data.id,
      avatar: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogData: blog, blogLoading: false})
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  renderBlog = () => {
    const {blogData} = this.state
    console.log(blogData)
    return (
      <div className="blog">
        <h1>{blogData.title}</h1>
        <div className="profile-container">
          <img className="profile-image" src={blogData.avatar} alt="author" />
          <p className="author">{blogData.author}</p>
        </div>
        <img
          className="blog-image-url"
          src={blogData.imageUrl}
          alt={blogData.title}
        />
        <p className="content">{blogData.content}</p>
      </div>
    )
  }

  render() {
    const {blogLoading} = this.state
    return blogLoading ? this.renderLoading() : this.renderBlog()
  }
}

export default BlogItemDetails
