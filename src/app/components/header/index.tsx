import Image from 'next/image'
import style from './style.module.css'
import { dataFormater } from '@/utils/formater'

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div className={style.logo}>
          <Image src="/logomark.svg" width={33.17} height={33} alt="icon" />
          <Image src="/logotype.svg" width={106.14} height={15.5} alt="icon" />
        </div>
        <p className={style.text1}>Bem-vindo de volta, Marcus</p>
        <p className={style.text2}>{dataFormater.format(new Date())}</p>
      </div>
    </div>
  )
}
