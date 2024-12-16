import { useState } from 'react'

import { Avatar, Button, Card, Loader } from '../../../../Components'
import { usePicSelector } from './Hooks'

import style from './PicSelector.module.css'

interface Props {
  value: number | undefined
  onChange: (e: number) => void
}

const PicSelector = ({ value, onChange }: Props) => {
  const [popUp, setPopUp] = useState<boolean>(false)

  const {
    all,
    loading,
    totalPages,
    currentPage,
    incrementPage,
    decrementPage,
  } = usePicSelector()

  const togglePopUp = () => {
    setPopUp(!popUp)
  }

  return (
    <>
      <Card className={style['card-container']}>
        <Avatar
          user={
            !loading
              ? value !== undefined
                ? {
                    name: all[value].name,
                    pic: all[value].image,
                  }
                : undefined
              : undefined
          }
        />
        <div className={style.content}>
          {loading ? (
            <div className={style.shape}></div>
          ) : (
            <h3>{value !== undefined ? all[value].name : 'Nombre'}</h3>
          )}
          {loading ? (
            <div className={style.shape}></div>
          ) : (
            <p>{value !== undefined ? all[value].species : 'Especie'}</p>
          )}
        </div>
        <Button
          type='button'
          className={style.button}
          unfilled
          value={loading ? '...' : value !== undefined ? 'Cambiar' : 'Elegir'}
          onClick={togglePopUp}
        />
      </Card>
      <div
        className={`${style.overlay} ${popUp ? style.active : ''}`}
        onClick={togglePopUp}>
        <div className={style.popUp} onClick={(e) => e.stopPropagation()}>
          <div className={style.header}>
            <Button
              className={style['header-button']}
              unfilled
              type='button'
              icon='angle-circle-left'
              onClick={togglePopUp}
            />
            <h3>Seleccionar Avatar</h3>
          </div>
          <div className={style['popUp-body']}>
            {loading ? (
              <Loader />
            ) : (
              all.map((item, idx) => (
                <Avatar
                  key={item.id}
                  user={{ name: item.name, pic: item.image }}
                  size='large'
                  className={style.avatar}
                  onClick={() => {
                    togglePopUp()
                    onChange(idx)
                  }}
                />
              ))
            )}
          </div>
          <div className={style.paginator}>
            <Button
              type='button'
              unfilled
              icon='angle-left'
              onClick={() => decrementPage()}
            />
            <h4>
              {currentPage} de {totalPages}
            </h4>
            <Button
              type='button'
              unfilled
              icon='angle-right'
              onClick={() => incrementPage()}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PicSelector
