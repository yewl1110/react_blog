import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostViewer from '../../components/post/PostViewer'
import { readPost, unloadPost } from '../../modules/post'

const PostViewerContainer = () => {
  const { postId } = useParams()
  const dispatch = useDispatch()
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }))

  useEffect(() => {
    dispatch(readPost(postId))
    return () => {
      dispatch(unloadPost())
    }
  }, [dispatch, postId])

  return <PostViewer post={post} loading={loading} error={error} />
}

export default PostViewerContainer
