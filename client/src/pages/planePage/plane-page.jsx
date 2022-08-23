import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Spinner } from '../../components/spinner'
import { getPlane } from '../../store/plane/planeSlice'
import { ContentWrapper } from '../../components/content wrapper'

import styles from './styles.module.css'
import { Button } from '../../components/button'


export const PlanePage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const {plane, isLoading} = useSelector(state => state.plane)

    useEffect(() => {
        dispatch(getPlane(id))
    }, [dispatch, id])

    if(isLoading) return <Spinner />
    
  return plane && (
    <ContentWrapper className={styles.plane}>
        <div className={styles.descContent}>
            <Button onClick={() => navigate(-1)}>Назад</Button>
            <h1 className={styles.title}>{plane.name}</h1>
            <div className={styles.price}>{plane.price}</div>
            <Button
                containerClassName={styles.buyBtnContainer}
                onClick={() => navigate('/order')}
            >
                Оформить заказ
            </Button>
            <p className={styles.desc}>{plane.description}</p>
        </div>
        <div  className={styles.ImgContent}>
            <img src={plane.planeImage} className={styles.image} alt="" />
        </div>
    </ContentWrapper>
  )
}
