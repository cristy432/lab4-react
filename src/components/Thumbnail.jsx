import styles from "./Thumbnail.module.css";

function Thumbnail({ image, isSelected, onClick }) {
  return (
    <div
      className={`${styles.thumbnail} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
      title={image.title}
    >
      <img src={image.url} alt={image.title} className={styles.img} />
      {isSelected && (
        <div className={styles.selectedOverlay}>
          <span className={styles.checkmark}>✓</span>
        </div>
      )}
      <div className={`${styles.caption} ${isSelected ? styles.captionSelected : ""}`}>
        {image.title}
      </div>
    </div>
  );
}

export default Thumbnail;
