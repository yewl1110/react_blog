import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { check } from '../../modules/user'
import AuthForm from '../../components/auth/AuthForm'
import { changeField, initializeForm } from '../../modules/auth'
import { register } from '../../modules/auth'
import { withRouter, useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
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
    if ([username, password, passwordConfirm].includes('')) {
      setError('빈칸을 모두 입력하세요')
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다')
      dispatch(changeField({ form: 'register', key: 'password', value: '' }))
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      )
      return
    }
    dispatch(register({ username, password }))
  }

  useEffect(() => {
    dispatch(initializeForm('register'))
  }, [dispatch])

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.')
        return
      }
      setError('회원가입 실패')
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
      navigate('/')

      try {
        localStorage.setItem('user', JSON.stringify(user))
      } catch (e) {
        console.log(e)
      }
    }
  }, [navigate, user])

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  )
}
export default RegisterForm
