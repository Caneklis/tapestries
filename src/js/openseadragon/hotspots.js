var map = (function (me, undefined) {
  me.hotspots = [
    {
      x: 4500,
      y: 2500,
      w: 250,
      h: 250,
      id: "1",
      link: "1",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Точка 1",
      description: `
      <div class="ssb__full-text">
        <p>Макрофотография шерстяной красной нити при различном увеличении.
        Шерстяная нить II порядка, толщиной ок 1,2 мм, S-крутки с шагом 4,17 мм., состоит из двух нитей I порядка толщиной ок. 0,68 мм, Z-крутки с шагом ок. 1,87 мм. </p>
      </div>

      <!-- Изображение до/после на пк и планшете -->
      <div class="ssb__before-after">
        <!-- Изображение до -->
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <!-- Изображение после -->
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
      </div>

      <div class="before-after  ssb__before-after-slider">
        <!-- Изображение до -->
        <img src="images/before-after/before-after-thumb-1.jpg" />
        <!-- Изображение после -->
        <img src="images/before-after/before-after-thumb-1b.jpg" />
      </div>
			`,
      data: "",
    },
    {
      x: 1500,
      y: 2500,
      w: 250,
      h: 250,
      id: "2",
      link: "2",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Мода",
      description: `
      <div class="ssb__before-after">
        <!-- Изображение до -->
        <a class="ssb__gallery-popup-link" href="images/fashion-1.jpg">
          <img src="images/fashion-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/fashion-1b.jpg">
          <img src="images/fashion-1b.jpg" />
        </a>
      </div>
      <div class="before-after  ssb__before-after-slider">
        <img src="images/fashion-1.jpg" />
        <img src="images/fashion-1b.jpg" />
      </div>
			`,
      data: "research",
    },
    {
      x: 5500,
      y: 1500,
      w: 250,
      h: 250,
      id: "2",
      link: "2",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Точка 2",
      description: `
      <div class="ssb__before-after">
        <!-- Изображение до -->
        <a class="ssb__gallery-popup-link" href="images/bird-1.jpg">
          <img src="images/bird-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/bird-1b.jpg">
          <img src="images/bird-1b.jpg" />
        </a>
      </div>
      <div class="before-after  ssb__before-after-slider">
        <img src="images/bird-1.jpg" />
        <img src="images/bird-1b.jpg" />
      </div>
			`,
      data: "bird",
    },
    {
      x: 1500,
      y: 1500,
      w: 250,
      h: 250,
      id: "3",
      link: "3",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Точка 3",
      description: `
      <div class="ssb__full-text">
        <p>Сюда пишется весь текст</p>
      </div>

      <div class="ssb__gallery">
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
      </div>
			`,
      data: "story",
    },
    {
      x: 500,
      y: 500,
      w: 250,
      h: 250,
      id: "1",
      link: "1",
      image: "images/fashion-thumb-1.jpg",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Точка 1",
      description: `
      <div class="ssb__full-text">
        <p>Макрофотография шерстяной красной нити при различном увеличении.
        Шерстяная нить II порядка, толщиной ок 1,2 мм, S-крутки с шагом 4,17 мм., состоит из двух нитей I порядка толщиной ок. 0,68 мм, Z-крутки с шагом ок. 1,87 мм. </p>
      </div>
      <div class="ssb__gallery">
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1.jpg">
          <img src="images/before-after/before-after-thumb-1.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-1b.jpg">
          <img src="images/before-after/before-after-thumb-1b.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2.jpg">
          <img src="images/before-after/before-after-thumb-2.jpg" />
        </a>
        <a class="ssb__gallery-popup-link" href="images/before-after/before-after-thumb-2b.jpg">
          <img src="images/before-after/before-after-thumb-2b.jpg" />
        </a>
      </div>
			`,
      data: "bird",
    },
  ];

  return me;
})(map || {});
