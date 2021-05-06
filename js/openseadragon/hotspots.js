var map = (function (me, undefined) {
  me.hotspots = [
    {
      x: 4500,
      y: 2500,
      w: 40,
      h: 40,
      id: "1",
      link: "1",
      image: "",
      audio: "",
      // checkResize: false,
      category: "",
      title: "Точка 1",
      description: `
      <div class="ssb__full-text">
        <p>Сюда пишется весь текст</p>
      </div>

      <!-- Изображение до/после на пк и планшете -->
      <div class="ssb__before-after">
        <!-- Изображение до -->
        <img src="images/before-after/before-after-thumb-1.jpg" />
        <!-- Изображение после -->
        <img src="images/before-after/before-after-thumb-1b.jpg" />
      </div>

      <div class="before-after  ssb__before-after-slider">
        <!-- Изображение до -->
        <img src="images/before-after/before-after-thumb-1.jpg" />
        <!-- Изображение после -->
        <img src="images/before-after/before-after-thumb-1b.jpg" />
      </div>
			`,
      data: "red",
    },
    {
      x: 1500,
      y: 2500,
      w: 40,
      h: 40,
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
        <img src="images/before-after/before-after-thumb-2.jpg" />
        <img src="images/before-after/before-after-thumb-2b.jpg" />
      </div>
      <div class="before-after  ssb__before-after-slider">
        <img src="images/before-after/before-after-thumb-2.jpg" />
        <img src="images/before-after/before-after-thumb-2b.jpg" />
      </div>
			`,
      data: "blue",
    },
    {
      x: 1500,
      y: 1500,
      w: 40,
      h: 40,
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
      data: "green",
    },
  ];

  return me;
})(map || {});
