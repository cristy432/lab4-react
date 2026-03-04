import MainImage from "./MainImage";
import Controls from "./Controls";
import Thumbnail from "./Thumbnail";
import styles from "./Gallery.module.css";

function Gallery({ imageList, selectedIndex, onSelect, onNext, onPrev, onRandom, onShuffle }) {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>🐱 Galerie Miau-Miau</h1>
        <p className={styles.subtitle}>Selectează o pisicuță din lista de mai jos</p>
      </header>

      {/* Main Image Display */}
      <MainImage image={imageList[selectedIndex]} index={selectedIndex} total={imageList.length} />

      {/* Control Buttons */}
      <Controls onNext={onNext} onPrev={onPrev} onRandom={onRandom} onShuffle={onShuffle} />

      {/* Thumbnail List */}
      <div className={styles.thumbnailList}>
        {imageList.map((img, idx) => (
          <Thumbnail
            key={img.id}
            image={img}
            isSelected={idx === selectedIndex}
            onClick={() => onSelect(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
