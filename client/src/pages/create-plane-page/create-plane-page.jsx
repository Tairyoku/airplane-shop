import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { ContentWrapper } from '../../components/content wrapper'
import { Input } from '../../components/input'
import styles from './styles.module.css'
import { Button } from '../../components/button'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { createPlane } from '../../store/plane/planeSlice'
import { paths } from '../../paths'


export const CreatePlanePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {errors} = useSelector(state => state.plane)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [capacity, setCapacity] = useState('')
    const [planeImage, setPlaneImage] = useState(null)

    const handleCreatePlane =useCallback(() => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', price)
      formData.append('description', description)
      formData.append('capacity', capacity)
      formData.append('planeImage', planeImage)

      dispatch(createPlane(formData))
      .then(res => {
        if (!res.error) {
          navigate(`${paths.plane}/${res.payload._id}`, { replace: true })
        }
      })
    }, [name, price, description, dispatch, navigate, capacity, planeImage ])


  return (
    <ContentWrapper className={styles.createPlane}>
            <Button 
            onClick={() => navigate(-1)}
            isBackButton={true}
            containerClassName={styles.backBtnContainer}
            >
              Назад
            </Button>
            <form className={styles.form}>
                <h1 className={styles.title}>Создать самолет</h1>
                <Input
                  name='name'
                  placeholder='Название самолета'
                  onChange={(e) => setName(e.target.value)}
                  error={ errors && errors.name && errors.name.message }
                  />
                  <Input
                  name='price'
                  placeholder='Цена самолета'
                  onChange={(e) => setPrice(e.target.value)}
                  error={ errors && errors.price && errors.price.message }
                  />
                  <Input
                  name='description'
                  placeholder='Описание'
                  onChange={(e) => setDescription(e.target.value)}
                  error={ errors && errors.description && errors.description.message }
                  />
                  <Input
                  name='capacity'
                  placeholder='Вместимость'
                  onChange={(e) => setCapacity(e.target.value)}
                  error={ errors && errors.capacity && errors.capacity.message }
                  />
                  <Input
                  name='planeImage'
                  type='file'
                  placeholder='Название самолета'
                  onChange={(e) => setPlaneImage(e.target.files[0])}
                  error={ errors && errors.planeImage && errors.planeImage.message }
                  />
                  <Button 
                  containerClassName={styles.buttonContainer}
                  onClick={ handleCreatePlane }>
                    Создать
                  </Button>
            </form>
            </ContentWrapper>
  )
}
