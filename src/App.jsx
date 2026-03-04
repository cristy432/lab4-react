import { useState } from "react";
import images from "./images.json";
import Gallery from "./components/Gallery";

function App() {
  const [imageList, setImageList] = useState(images);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goNext = () => {
    setSelectedIndex((prev) => (prev + 1) % imageList.length);
  };

  const goPrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + imageList.length) % imageList.length,
    );
  };

  const goRandom = () => {
    let next;
    do {
      next = Math.floor(Math.random() * imageList.length);
    } while (next === selectedIndex && imageList.length > 1);
    setSelectedIndex(next);
  };

  const shuffleList = () => {
    const shuffled = [...imageList].sort(() => Math.random() - 0.5);
    setImageList(shuffled);
    setSelectedIndex(0);
  };

  return (
    <Gallery
      imageList={imageList}
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
      onNext={goNext}
      onPrev={goPrev}
      onRandom={goRandom}
      onShuffle={shuffleList}
    />
  );
}

export default App;
