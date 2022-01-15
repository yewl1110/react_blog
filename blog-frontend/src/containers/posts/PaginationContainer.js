import qs from 'qs'
import { useSelector } from 'react-redux'
import {
  useLocation,
  useParams,
} from '../../../node_modules/react-router/index'
import Pagination from '../../components/posts/Pagination'

const PaginationContainer = () => {
  const location = useLocation()
  const params = useParams()
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }))

  if (!posts || loading) return null
  const { username } = params
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })
  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  )
}

export default PaginationContainer
