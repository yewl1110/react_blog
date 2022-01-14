import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from '../../../node_modules/react-router-dom/index'
import WriteActionButtons from '../../components/write/WriteActionButtons'
import { writePost } from '../../modules/write'

const WriteActionButtonsContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }))

  const onPublish = () => {
    dispatch(writePost({ title, body, tags }))
  }

  const onCancel = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (post) {
      const { _id, user } = post
      navigate(`/@${user.username}/${_id}`)
    }
    if (postError) {
      console.log(postError)
    }
  }, [navigate, post, postError])
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />
}

export default WriteActionButtonsContainer
