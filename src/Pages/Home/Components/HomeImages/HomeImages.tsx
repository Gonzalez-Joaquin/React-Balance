import style from './HomeImages.module.css'
import pic1 from '../../Assets/pic4.jpg'

const HomeImages = () => {
  return (
    <article className={`${style.article} ${style.pic}`}>
      <div className={style['pic-container']}>
        <div className={style['pic-header']}>
          <h1>WebChat</h1>
        </div>
        <div className={style['image-container']}>
          <img className={style.image} src={pic1} alt={`pic1`} />
        </div>
        <div className={style['pic-footer']}>
          <div className={style.shape}></div>
        </div>
      </div>
    </article>
  )
}

export default HomeImages
