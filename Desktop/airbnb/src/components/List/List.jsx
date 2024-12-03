import styles from './style.module.scss';

const List = ({title, img}) => {
  return ( 
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default List;