import Header from "./components/Header";
import Main from "./components/Main";
import SlideContent from "./components/SlideContent";
import Development from "./components/Development";
import Works from "./components/Works";

import { useState } from "react";

const App = () => {
  const [active, setActive] = useState(false); // Подняли состояние чтобы передать пропс и в тот компонент и в тот

  const toggleActive = () => {
    setActive((prevActive) => !prevActive);
  };

    return (
        <div className="app">
          <Header active={active} toggleActive={toggleActive}/>
          <Main active={active} setActive={setActive}/>
          <SlideContent/>
          <Development/>
          <Works/>
        </div>  
    );
  };

export default App;

{/* <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
  Это пример текста, размер которого изменяется в зависимости от размера экрана.
</p> */}

/* Стандартные брейкпоинты в Tailwind CSS:
sm (small) — от 640px и выше:

css
Копировать код
@media (min-width: 640px) { ... }
md (medium) — от 768px и выше:

css
Копировать код
@media (min-width: 768px) { ... }
lg (large) — от 1024px и выше:

css
Копировать код
@media (min-width: 1024px) { ... }
xl (extra large) — от 1280px и выше:

css
Копировать код
@media (min-width: 1280px) { ... }
2xl (2x extra large) — от 1536px и выше:

css
Копировать код
@media (min-width: 1536px) { ... } */