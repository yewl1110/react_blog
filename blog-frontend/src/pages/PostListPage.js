import Button from '../components/common/Button'
import Header from '../components/common/Header'
import PostList from '../components/posts/PostList'
import HeaderContainer from '../containers/common/HeaderContainer'
import PaginationContainer from '../containers/posts/PaginationContainer'
import PostListContainer from '../containers/posts/PostListContainer'

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  )
}

export default PostListPage
