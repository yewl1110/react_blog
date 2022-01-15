import qs from 'qs'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from '../../../node_modules/react-router-dom/index'
import { useLocation, useMatch } from '../../../node_modules/react-router/index'
import PostList from '../../components/posts/PostList'
import { listPosts } from '../../modules/posts'

const PostListContainer = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const params = useParams()
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  )

  useEffect(() => {
    const { username } = params
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    })
    dispatch(listPosts({ tag, username, page }))
  }, [dispatch, location.search])

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  )
}
export default PostListContainer
