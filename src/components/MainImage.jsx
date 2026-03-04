import styles from "./MainImage.module.css";

function MainImage({ image, index, total }) {
  if (!image) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <img
          src={image.url}
          alt={image.title}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <span className={styles.imageTitle}>{image.title}</span>
          <span className={styles.counter}>{index + 1} / {total}</span>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
