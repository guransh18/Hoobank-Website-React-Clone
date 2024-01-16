import styles from '../style';
import { arrowUp } from '../assets';
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-1 cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-poppins font-medium text-[18px] text-gradient mr-2">
            <span>Get </span>
          </p>
          <img src={arrowUp} alt="arrow up" className='h-[23px] w-[23px] object-contain' />
        </div>
        <p className="font-poppins font-medium text-[18px] text-gradient">
            <span>Started</span>
          </p>
      </div>
    </div>
  )
}

export default GetStarted

