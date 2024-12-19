import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button, Input, ToggleTheme, useToast } from '../../Components'
import { PicSelector, HomeImages } from './Components'
import style from './Home.module.css'
import API from '../../Api'

const Home = () => {
  const [errors, _setErrors] = useState<{ [key: string]: string | null }>({})
  const [values, setValues] = useState<{ [key: string]: string }>({
    'create-acc-name': '',
    'create-acc-surname': '',
    'create-acc-username': 'akjoako',
    'create-acc-password': '1234',
    'create-acc-character': '',
  })
  const [isLogin, setLogin] = useState<boolean>(true)
  const { showToast } = useToast()
  const navigate = useNavigate()

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const toggle = () => {
    setValues({
      'create-acc-name': '',
      'create-acc-surname': '',
      'create-acc-username': '',
      'create-acc-password': '',
      'create-acc-character': '',
    })
    setLogin(!isLogin)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLogin) {
      return login()
    }

    return create()
  }

  const login = async () => {
    if (
      values['create-acc-username'].length === 0 ||
      values['create-acc-username'].length > 16 ||
      values['create-acc-password'].length === 0
    ) {
      return showToast(
        { message: 'Complete los datos para continuar' },
        'error'
      )
    }

    try {
      const response = await API.post('/users/login', {
        username: values['create-acc-username'],
        password: values['create-acc-password'],
      })

      sessionStorage.setItem('user', JSON.stringify(response.data))
      navigate('/users')
    } catch (err: any) {
      showToast({ message: err.response?.data || 'Error desconocido' }, 'error')
    }
  }

  const create = async () => {
    if (
      values['create-acc-name'].length !== 0 &&
      values['create-acc-surname'].length !== 0 &&
      values['create-acc-username'].length !== 0 &&
      values['create-acc-password'].length !== 0 &&
      values['create-acc-character'] !== '' &&
      values['create-acc-username'].length <= 16
    ) {
      console.log(values)
      return showToast(
        { message: 'Complete los datos para continuar' },
        'error'
      )
    }

    try {
      const response = await API.post('/users', {
        name: values['create-acc-name'],
        surname: values['create-acc-surname'],
        characterID: values['create-acc-character'],
        password: values['create-acc-password'],
        username: values['create-acc-username'],
      })

      console.log(response)
    } catch (err: any) {
      showToast({ message: err.response.data }, 'error')
    }
  }

  return (
    <section className={style.section}>
      <HomeImages />
      <article className={`${style.article} ${style['article-form']}`}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style['form-header']}>
            <h3>Crear una cuenta</h3>
            <div className={style['form-header-text']}>
              <p>Comienza</p>
              <Button
                unfilled
                type='button'
                size='small'
                onClick={toggle}
                value={!isLogin ? 'iniciando' : 'creando'}
              />
              <p>tu perfil para chatear, y usar esta web app</p>
            </div>
          </div>
          <div className={style['form-container']}>
            {!isLogin && (
              <>
                <PicSelector
                  value={
                    values['create-acc-character'] !== ''
                      ? +values['create-acc-character']
                      : undefined
                  }
                  onChange={(e) => handleChange('create-acc-character', `${e}`)}
                />
                <div className={style['form-field']}>
                  <Input
                    label='Nombre'
                    placeholder='Random'
                    name='create-acc-name'
                    value={values['create-acc-name']}
                    error={errors['create-acc-name']}
                    onChange={(e) =>
                      handleChange('create-acc-name', e.target.value)
                    }
                  />
                  <Input
                    label='Apellido'
                    placeholder='User'
                    name='create-acc-surname'
                    error={errors['create-acc-surname']}
                    value={values['create-acc-surname']}
                    onChange={(e) =>
                      handleChange('create-acc-surname', e.target.value)
                    }
                  />
                </div>
              </>
            )}
            <div className={style['form-field-2']}>
              <Input
                label='Nombre de usuario'
                name='create-acc-username'
                placeholder='randomuser123'
                limit={16}
                value={values['create-acc-username']}
                error={errors['create-acc-username']}
                onChange={(e) =>
                  handleChange('create-acc-username', e.target.value)
                }
              />
              <Input
                type='password'
                label='Contraseña'
                placeholder='password123'
                name='create-acc-password'
                value={values['create-acc-password']}
                error={errors['create-acc-password']}
                onChange={(e) =>
                  handleChange('create-acc-password', e.target.value)
                }
              />
            </div>
          </div>

          <Button
            value={!isLogin ? 'Crear' : 'Entrar'}
            type='submit'
            className={style.button}
          />
        </form>
      </article>
      <div className={style.toggle}>
        <ToggleTheme />
      </div>
    </section>
  )
}

export default Home
