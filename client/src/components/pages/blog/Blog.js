import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

// this is where I'm getting a bit lost is with the front end CRUD actions
// and where to put axios or why we're using it, i need to go back and look

class Blog extends Component {
  state= { blogs: [] };

  componentDidMount() {
    axios.get("/api/blogs")
      .then( res => {
        this.setState({ blogs: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  addItem = (incomingBlog) => {
    const blog = incomingBlog
    axios.post('/api/blogs', {blog})
      .then ( res => {
        const { blogs } = this.state
        this.setState({ blogs: [...blogs, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { blogs } = this.state
    return (
      <>
        <div class="image-header blog">
          <h1>Adventures</h1>
          <div class="img-overlay"></div>
        </div>
        {
          blogs.map( blog =>
            <div class="blog-section">
              <h1>
                <Link to={{
                  pathname: `/blog/${blog.id}`,
                  state: {...blog}
                }}>
                </Link>
              </h1>
              <h1>{blog.title}</h1>
              <h1>{blog.body}</h1>
              <img src={blog.image}/>
            </div> 
          )
        }
        
      </>
    )
  } 
}

export default Blog;