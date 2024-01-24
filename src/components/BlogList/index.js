import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], loadingStatus: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiUrl = `https://apis.ccbp.in/blogs`
    const response = await fetch(apiUrl)
    const bList = await response.json()

    const updateBList = bList.map(item => ({
      author: item.author,
      avatarUrl: item.avatar_url,
      id: item.id,
      imageUrl: item.image_url,
      title: item.title,
      topic: item.topic,
    }))

    this.setState({blogsList: updateBList, loadingStatus: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {blogsList, loadingStatus} = this.state
    return loadingStatus ? (
      this.renderLoader()
    ) : (
      <ul className="blog-list">
        {blogsList.map(eachBlog => (
          <BlogItem key={eachBlog.id} item={eachBlog} />
        ))}
      </ul>
    )
  }
}

export default BlogList
