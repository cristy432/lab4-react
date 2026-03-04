import styles from "./Controls.module.css";

const buttons = [
  { label: "◀ Imaginea Anterioară", key: "prev", color: "purple" },
  { label: "Următoarea Imagine ▶", key: "next", color: "purple" },
  { label: "🎲 Imagine Aleatoare", key: "random", color: "pink" },
  { label: "🔀 Aranjare Aleatoare", key: "shuffle", color: "blue" },
];

function Controls({ onNext, onPrev, onRandom, onShuffle }) {
  const handlers = { next: onNext, prev: onPrev, random: onRandom, shuffle: onShuffle };

  return (
    <div className={styles.controls}>
      {buttons.map(({ label, key, color }) => (
        <button
          key={key}
          className={`${styles.btn} ${styles[color]}`}
          onClick={handlers[key]}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Controls;
