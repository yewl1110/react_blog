import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { check } from '../../modules/user'
import AuthForm from '../../components/auth/AuthForm'
import { changeField, initializeForm } from '../../modules/auth'
import { register } from '../../modules/auth'
import { withRouter, useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }))

  const onChange = (e) => {
    const { value, name } = e.target
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { username, password, passwordConfirm } = form
    if (password !== passwordConfirm) {
      return
    }
    dispatch(register({ username, password }))
  }

  useEffect(() => {
    dispatch(initializeForm('register'))
  }, [dispatch])

  useEffect(() => {
    if (authError) {
      console.log('오류발생')
      console.log(authError)
      return
    }
    if (auth) {
      console.log('오류발생')
      console.log(auth)
      dispatch(check())
    }
  }, [auth, authError, dispatch])

  useEffect(() => {
    if (user) {
      console.log('checkAPI 성공')
      console.log(user)
      navigate('/')
    }
  }, [navigate, user])

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}
export default RegisterForm
