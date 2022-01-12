import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthForm from '../../components/auth/AuthForm'
import { changeField, initializeForm, login } from '../../modules/auth'
import { check } from '../../modules/user'

const LoginForm = ({ navigation }) => {
  const dispatch = useDispatch()
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }))

  const onChange = (e) => {
    const { value, name } = e.target
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { username, password } = form
    dispatch(login({ username, password }))
  }

  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch])

  useEffect(() => {
    if (authError) {
      console.log('오류발생')
      console.log(authError)
      return
    }
    if (auth) {
      console.log('로그인 성공')
      dispatch(check())
    }
  }, [auth, authError, dispatch])

  useEffect(() => {
    if (user) {
      navigation('/')
    }
  }, [navigation, user])

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

export default LoginForm
