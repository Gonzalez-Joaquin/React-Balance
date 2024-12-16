import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button, Input, ToggleTheme } from '../../Components'
import { PicSelector, HomeImages } from './Components'
import style from './Home.module.css'

const Home = () => {
  const navigate = useNavigate()

  const [errors, _setErrors] = useState<{ [key: string]: string | null }>({})
  const [values, setValues] = useState<{ [key: string]: string }>({
    'create-acc-name': '',
    'create-acc-surname': '',
    'create-acc-username': '',
    'create-acc-password': '',
    'create-acc-character': '',
  })

  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <section className={style.section}>
      <HomeImages />
      <article className={`${style.article} ${style['article-form']}`}>
        <form className={style.form}>
          <div className={style['form-header']}>
            <h3>Crear una cuenta</h3>
            <p>Comienza creando tu perfil para poder chatear</p>
          </div>
          <div className={style['form-container']}>
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
            value='Crear Cuenta'
            onClick={() => navigate('/Users')}
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
