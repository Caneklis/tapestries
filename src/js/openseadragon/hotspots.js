var map = (function (me, undefined) {
  me.hotspots = [
    {
      x: 4500,
      y: 2500,
      w: 40,
      h: 40,
      id: "1",
      link: "#2",
      image: "img/parts/1.jpg",
      audio: "audio/1.mp3",
      checkResize: false,
      category: "",
      title: "Название точки",
      description: `
      <div id="page">
        <div class="wrapper">
          <div class="before">
            <img class="content-image" src="https://farm2.staticflickr.com/1638/26145024230_06acd55d1b_b.jpg" draggable="false"/>   </div>
          <div class="after">
            <img class="content-image" src="https://farm2.staticflickr.com/1663/25814974803_d4c55ff708_b.jpg" draggable="false"/>
          </div>
          <div class="scroller">
            <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><polygon points="0 50 37 68 37 32 0 50" style="fill:#fff"/><polygon points="100 50 64 32 64 68 100 50" style="fill:#fff"/></svg>
          </div>
        </div>
      </div>
			`,
      data: "red",
    },
  ];

  return me;
})(map || {});
