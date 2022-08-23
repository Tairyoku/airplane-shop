import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/button'
import { ContentWrapper } from '../../components/content wrapper'
import { Header } from '../../components/header'
import { Planes } from '../../components/planes/planes'
import styles from './styles.module.css'

export const OrderPage = () => {
  const navigate = useNavigate()
  
  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будкт доставлен в ближайшее время</h1>
      <Button 
      containerClassName={styles.button}
      onClick={() => navigate('/')}
      >
        На главную
      </Button>
    </ContentWrapper>
  )
}
