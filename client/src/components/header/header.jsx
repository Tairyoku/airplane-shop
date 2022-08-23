import React from 'react'
import { ContentWrapper } from '../content wrapper'
import WaveImage from './wave.svg'
import styles from './styles.module.css'

export const Header = () => {
  return (
      <div className={styles.header}>
        <ContentWrapper className={styles.content}>
        <h1 className={styles.title}>
            {`Путешествуйте с\nКомфортом`}
            </h1>
        <p className={styles.desc}>{`С нашей командой вы забудете обо всем, кроме\nвысокого уровня путешествий`} </p>        
    </ContentWrapper>
    <img src={WaveImage} alt="bbbbbbbbbbbb" className={styles.wave} />
    </div>
  )
}
