let search = document.getElementById("search");
let search_icon = document.getElementById("search_icon");

search_icon.addEventListener("click", () => {
  search.classList.toggle("search_input");
});
let cato_bx = document.getElementById("cato_bx");
let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");
left_scroll.addEventListener("click", () => {
  cato_bx.scrollLeft -= 100;
});
right_scroll.addEventListener("click", () => {
  cato_bx.scrollLeft += 100;
});

let movies = document.getElementById("movies");
let left = document.getElementById("left");
let right = document.getElementById("right");
left.addEventListener("click", () => {
  movies.scrollLeft -= 100;
});
right.addEventListener("click", () => {
  movies.scrollLeft += 100;
});

// video
let seekbar = document.querySelector(".start_seekbar_end");
let vol_screen = document.querySelector(".cc_vol-screen");
let vol = document.getElementById("vol");
let volIcon = document.getElementById("vol_icon");
volIcon.addEventListener("click", () => {
  vol_screen.classList.toggle("cc_vol");
  seekbar.classList.toggle("start_seekbar");
  vol.classList.toggle("input_vol");
});

// filter
let year = document.getElementById("year");
let AZ = document.getElementById("a-z");
year.addEventListener("click", () => {
  year.classList.toggle("show_year1");
});
AZ.addEventListener("click", () => {
  AZ.classList.toggle("show_year1");
});
// header slider
let header_dur = document.getElementById("header_dur");
let header_gen = document.getElementById("header_gen");
let header_title = document.getElementById("header_title");
let header_pra = document.getElementById("header_pra");
let header = document.getElementsByTagName("header")[0];
let sliderBtn = document.getElementsByClassName("slider");
const slider = () => {
  setTimeout(() => {
    header.style.background =
      "url('./img/ramp.webp') no-repeat center center/cover";
    header_dur.innerText = "1 час 47минут";
    header_gen.innerHTML = ` <i class="fa-solid fa-star"></i>6.5
    <span>Акция / Преключение / Научная фантастика</span>`;
    header_title.innerText = "Rampage";
    header_pra.innerText =
      "Rampage - американский научно-фантастический приключенческий фильм о монстрах 2018 года, снятый Брэдом Пейтоном и основанный на одноименной серии видеоигр от Midway Games по сценарию Райана Энгла, Карлтона Кьюза, Райана Дж. Кондала и Адама Штыкиля.";
    sliderBtn[0].style.background = "#fff";
    sliderBtn[1].style.background = "rgb(184, 184, 184, .1)";
    sliderBtn[2].style.background = "rgb(184, 184, 184, .1)";
  }, 0000);
  setTimeout(() => {
    header.style.background =
      "url('./img/jack.jpeg') no-repeat center center/cover";
    header_dur.innerText = "2 часа 14минут";
    header_gen.innerHTML = `<i class="fa-solid fa-star"></i>8.5
    <span>Приключения/Фентези</span>`;
    header_title.innerText = "Пираты Карибского моря";
    header_pra.innerText =
      "серия приключенческих фильмов о пиратах в Карибском море, режиссёрами которых выступили Гор Вербински, Роб Маршалл, Эспен Сандберг и Юаким Рённинг. Сценарий к фильмам писали Терри Россио и Тед Эллиот, Джефф Натансон, а спродюсированы они были Джерри Брукхаймером.";
    sliderBtn[0].style.background = "rgb(184, 184, 184, .1)";
    sliderBtn[1].style.background = "#fff";
    sliderBtn[2].style.background = "rgb(184, 184, 184, .1)";
  }, 5000);
  setTimeout(() => {
    header.style.background =
      "url('./img/myra.jpg') no-repeat center center/cover";
    header_dur.innerText = "2 часа";
    header_gen.innerHTML = `<i class="fa-solid fa-star"></i>4.5
    <span>Комедия/ Акция / Научная фантастика</span>`;
    header_title.innerText = "Человек-муравей";
    header_pra.innerText =
      "Вооружившись удивительной способностью уменьшаться в размере, но обладать при этом большой силой, мошенник Скотт Лэнг должен стать героем и помочь своему наставнику, доктору Хэнку Пиму, сохранить в тайне существование костюма Человека-муравья от угроз нового поколения.";
    sliderBtn[0].style.background = "rgb(184, 184, 184, .1)";
    sliderBtn[1].style.background = "rgb(184, 184, 184, .1)";
    sliderBtn[2].style.background = "#fff";
  }, 10000);
};

setInterval(slider, 15000);

slider();
// video contol
let plays = document.getElementById("play");
let videos = document.getElementById("video");
let playBtn = document.getElementById("play_btn");
playBtn.addEventListener("click", () => {
  videos.play();
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});
plays.addEventListener("click", () => {
  if (videos.paused || videos.currentTime <= 0) {
    plays.classList.add("bi-pause-fill");
    plays.classList.remove("bi-play-fill");
    videos.play();
  } else {
    plays.classList.remove("bi-pause-fill");
    plays.classList.add("bi-play-fill");
    videos.pause();
  }
});
// video time
videos.addEventListener("timeupdate", () => {
  let start_time = document.getElementById("start_time");
  let end_time = document.getElementById("end_time");
  let video_duration = videos.duration;
  let min = Math.floor(video_duration / 60);
  let hour = Math.floor(min / 60);
  let sec = Math.floor(video_duration % 60);
  let video_current_time = videos.currentTime;
  let start_min = Math.floor(video_current_time / 60);
  let start_sec = Math.floor(video_current_time % 60);
  let start_hour = Math.floor(start_min / 60);

  if (start_min < 10) {
    start_min = "0" + start_min;
  }
  if (start_sec < 10) {
    start_sec = "0" + start_sec;
  }

  start_time.innerText = start_min + ":" + start_sec;

  if (start_hour < 10) {
    start_hour = "0" + start_hour;
  }

  if (start_min == 60 || start_min > 60) {
    start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
  }

  let end_min = min - start_min;
  let end_sec = video_duration - start_sec;
  let end_hour = hour - start_hour;

  let end_mins = Math.floor(end_min % 60);

  if (end_mins < 10) {
    end_mins = "0" + end_mins;
  }
  let end_secc = Math.floor(end_sec % 60);
  if (end_secc < 10) {
    end_secc = "0" + end_secc;
  }

  let end_hours = Math.floor(end_min / 60);
  if (end_hours < 10) {
    end_hours = "0" + end_hours;
  }
  end_time.innerText = "-" + ":" + end_mins + ":" + end_secc;

  if (end_min == 60 || end_min > 60) {
    end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secc;
  }

  // video progressbar

  let seek = document.getElementById("seek");
  let seek_2 = document.getElementById("seek_2");
  let seek_dot = document.getElementById("seek_dot");

  let progressbar = parseInt((videos.currentTime / videos.duration) * 100);

  seek.value = progressbar;
  let seekbar = seek.value;
  seek_2.style.width = `${seekbar}%`;
  seek_dot.style.left = `${seekbar}%`;

  // timeline
  let sec_30 = document.getElementById("sec_30");
  seek.addEventListener("change", () => {
    videos.currentTime = (seek.value * videos.duration) / 100;
    sec_30.addEventListener("click", () => {
      videos.currentTime = seek.value * ((videos.duration - 30) / 100);
    });
  });
  videos.addEventListener("ended", () => {
    plays.classList.remove("bi-pause-fill");
    plays.classList.add("bi-play-fill");
  });
});
//  volume

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    volIcon.classList.remove("bi-volume-up-fill");
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.add("bi-volume-off");
  }
  if (vol.value > 0) {
    volIcon.classList.remove("bi-volume-up-fill");
    volIcon.classList.add("bi-volume-down-fill");
    volIcon.classList.remove("bi-volume-off");
  }
  if (vol.value > 50) {
    volIcon.classList.add("bi-volume-up-fill");
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.remove("bi-volume-off");
  }

  let vol_a = vol.value;
  videos.volume = vol_a / 100;
});
// full screen

let full = document.getElementById("full_screen");
full.addEventListener("click", () => {
  videos.requestFullscreen();
});
// video box
let TitleVideo = document.getElementsByClassName("title_video");
let VideoOne = document.getElementsByClassName("video_1");
VideoOne[0].addEventListener("click", () => {
  videos.src = "./video/v1.mp4";
  videos.play();
  TitleVideo[0].innerText = "Rampage:2018";
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});
VideoOne[1].addEventListener("click", () => {
  videos.src = "./video/v2.mp4";
  videos.play();
  TitleVideo[0].innerText = "Пираты Карибского моря";
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});
VideoOne[2].addEventListener("click", () => {
  videos.src = "./video/v3.mp4";
  videos.play();
  TitleVideo[0].innerText = "Человек-муравей";
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});

const movi = [
  {
    id: 1,
    img: "./img/1.jpeg",
    down_img: "./img/111.webp",
    title: "Трансформеры",
    letter: "т",
    genre1: "Action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "18+",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "none",
    genre15: "none",
    year: 2013,
    rate: 7.5,
    url: "transformer.html",
    tppr: "popular",
    msot: "movie",
    upload: "2013",
    screen1: './img/1234.webp',
    screen2: './img/12345.jpeg',
    screen3: './img/123456.jpg',
    ph480: './img/1234.webp',
    ph720: './img/12345.jpeg',
    ph1080: './img/123456.jpg',
  },
  {
    id: 2,
    img: "./img/2.jpg",
    title: "Виктор",
    letter: "в",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "none",
    genre15: "none",
    year: 2001,
    rate: 8.5,
    url: "victor.html",
    tppr: "add",
    msot: "series",
    upload: "2001",
  },
  {
    id: 3,
    img: "./img/3.jpg",
    title: "Зомбиленд",
    letter: "з",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "18+",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2010,
    rate: 4.5,
    url: "Zombi.html",
    tppr: "add",
    msot: "movie",
    upload: "2010",
  },
  {
    id: 4,
    img: "./img/3.jpg",
    title: "Человек-паук",
    letter: "ч",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "Science-fiction",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2017,
    rate: 8.3,
    url: "chelik.html",
    tppr: "add",
    msot: "movie",
    upload: "2017",
  },
  {
    id: 5,
    img: "./img/4.jpg",
    title: "Аватар",
    letter: "а",
    genre1: "Action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "Science-fiction",
    genre12: "none",
    genre13: "none",
    genre14: "Famaly",
    genre15: "Melodrama",
    year: 2015,
    rate: 9.5,
    url: "avatar.html",
    tppr: "popular",
    msot: "movie",
    upload: "2015",
  },
  {
    id: 6,
    img: "./img/5.jpg",
    title: "Война миров",
    letter: "в",
    genre1: "Action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2018,
    rate: 3.0,
    url: "war.html",
    tppr: "add",
    msot: "movie",
    upload: "2018",
  },
  {
    id: 7,
    img: "./img/6.jpg",
    title: "Джуманджи",
    letter: "д",
    genre1: "none",
    genre2: "none",
    genre3: "Adventures",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2022,
    rate: 6.5,
    url: "jumanji.html",
    tppr: "add",
    msot: "movie",
    upload: "latest",
  },
  {
    id: 8,
    img: "./img/7.jpeg",
    title: "Антураж",
    letter: "р",
    genre1: "none",
    genre2: "none",
    genre3: "Adventures",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "18+",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "none",
    genre15: "none",
    year: 2020,
    rate: 2.5,
    url: "entourage.html",
    tppr: "Preferences",
    msot: "movie",
    upload: "2020",
  },
  {
    id: 9,
    img: "./img/8.jpeg",
    title: "Фантастическая 4",
    letter: "ф",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "Biology",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "Science-fiction",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2022,
    rate: 9.5,
    url: "fiction.html",
    tppr: "popular",
    msot: "movie",
    upload: "latest",
  },
  {
    id: 10,
    img: "./img/9.jpg",
    title: "Малыш на драйве",
    letter: "м",
    genre1: "Action",
    genre2: "Crime",
    genre3: "Adventures",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "none",
    genre15: "none",
    year: 2010,
    rate: 4.1,
    url: "Kids.html",
    tppr: "Trends",
    msot: "movie",
    upload: "2010",
  },
  {
    id: 11,
    img: "./img/10.jpg",
    title: "Путешествие 2",
    letter: "п",
    genre1: "none",
    genre2: "none",
    genre3: "Adventures",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "18+",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "Famaly",
    genre15: "none",
    year: 2021,
    rate: 6.2,
    url: "advent.html",
    tppr: "Trends",
    msot: "movie",
    upload: "2022",
  },
  {
    id: 12,
    img: "./img/11.jpg",
    title: "Тор",
    letter: "т",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "Science-fiction",
    genre12: "none",
    genre13: "none",
    genre14: "none",
    genre15: "none",
    year: 2020,
    rate: 7.5,
    url: "tor.html",
    tppr: "popular",
    msot: "series",
    upload: "2020",
  },
  {
    id: 13,
    img: "./img/12.jpg",
    title: "Каникулы",
    letter: "к",
    genre1: "none",
    genre2: "none",
    genre3: "Adventures",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2011,
    rate: 5.5,
    url: "family.html",
    tppr: "add",
    msot: "movie",
    upload: "2011",
  },
  {
    id: 14,
    img: "./img/jack.jpeg",
    title: "Пираты Карибского моря",
    letter: "п",
    genre1: "Action",
    genre2: "Crime",
    genre3: "Adventures",
    genre4: "Biology",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2010,
    rate: 8.3,
    url: "pirat.html",
    tppr: "trends",
    msot: "movie",
    upload: "2010",
  },
  {
    id: 15,
    img: "./img/myra.jpg",
    title: "Человек-муравей",
    letter: "ч",
    genre1: "Action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "Drama",
    genre9: "none",
    genre10: "none",
    genre11: "Science-fiction",
    genre12: "none",
    genre13: "none",
    genre14: "Famaly",
    genre15: "none",
    year: 2018,
    rate: 7.5,
    url: "chelikm.html",
    tppr: "trends",
    msot: "movie",
    upload: "2018",
  },
  {
    id: 16,
    img: "./img/rampp.webp",
    title: "Рампейдж",
    letter: "Р",
    genre1: "Action",
    genre2: "none",
    genre3: "none",
    genre4: "Biology",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "Science-fiction",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2019,
    rate: 1.0,
    url: "rampage.html",
    tppr: "add",
    msot: "movie",
    upload: "2019",
  },
  {
    id: 17,
    img: "./img/18.png",
    title: "Крик",
    letter: "к",
    genre1: "none",
    genre2: "Crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "Comedy",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "none",
    genre12: "Horror",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2022,
    rate: 6.5,
    url: "krik.html",
    tppr: "add",
    msot: "movie",
    upload: "latest",
  },
  {
    id: 18,
    img: "./img/19.webp",
    title: "Добыча",
    letter: "д",
    genre1: "Action",
    genre2: "Crime",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "18+",
    genre11: "none",
    genre12: "Horror",
    genre13: "none",
    genre14: "none",
    genre15: "none",
    year: 2021,
    rate: 8.5,
    url: "dob.html",
    tppr: "Preferences",
    msot: "movie",
    upload: "2021",
  },
  {
    id: 19,
    img: "./img/20.jpg",
    title: "Дора",
    letter: "д",
    genre1: "none",
    genre2: "none",
    genre3: "Adventures",
    genre4: "Biology",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "Science-fiction",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2022,
    rate: 4.5,
    url: "dora.html",
    tppr: "trends",
    msot: "movie",
    upload: "latest",
  },
  {
    id: 20,
    img: "./img/21.jpg",
    title: "Черна пантера ",
    letter: "ч",
    genre1: "Action",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "none",
    genre9: "none",
    genre10: "none",
    genre11: "Science-fiction",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2021,
    rate: 3.5,
    url: "pantera.html",
    tppr: "popular",
    msot: "movie",
    upload: "2021",
  },
  {
    id: 21,
    img: "./img/22.jpeg",
    title: "Три тысячи лет желаний",
    letter: "т",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "Comedy",
    genre6: "none",
    genre7: "Drama",
    genre8: "none",
    genre9: "18+",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "none",
    genre15: "none",
    year: 2022,
    rate: 5.5,
    url: "three.html",
    tppr: "popular",
    msot: "movie",
    upload: "latest",
  },
  {
    id: 22,
    img: "./img/23.webp",
    title: "Анчартед",
    letter: "а",
    genre1: "none",
    genre2: "none",
    genre3: "Adventures",
    genre4: "Biology",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    genre8: "Serials",
    genre9: "none",
    genre10: "none",
    genre11: "Science fiction",
    genre12: "none",
    genre13: "none",
    genre14: "Family",
    genre15: "none",
    year: 2018,
    rate: 6.4,
    url: "anchar.html",
    tppr: "add",
    msot: "movie",
    upload: "2018",
  },
  {
    id: 23,
    img: "./img/24.jpg",
    title: "Хочу замуж",
    letter: "х",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "Drama",
    genre8: "none",
    genre9: "18+",
    genre10: "none",
    genre11: "none",
    genre12: "none",
    genre13: "none",
    genre14: "none",
    genre15: "Melodrama",
    year: 2022,
    rate: 1.2,
    url: "zam.html",
    tppr: "add",
    msot: "movie",
    upload: "latest",
  },
];

// button active
let action1 = document.getElementById("action");
let action_bx = document.getElementById("action_bx");

action1.addEventListener("click", () => {
  action1.classList.toggle("cato_button_active");
  action_bx.classList.toggle("movie_box_action");
});
const action_array = movi.filter((e) => {
  return e.genre1 == "Action";
});

action_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  action_bx.appendChild(card);
});

let crime1 = document.getElementById("crime1");
let crime_bx = document.getElementById("crime_bx");

crime1.addEventListener("click", () => {
  crime1.classList.toggle("cato_button_active");
  crime_bx.classList.toggle("movie_box_action");
});
const crime_array = movi.filter((e) => {
  return e.genre2 == "Crime";
});

crime_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  crime_bx.appendChild(card);
});

let adventures1 = document.getElementById("adventures1");
let adventures_bx = document.getElementById("adventures_bx");

adventures1.addEventListener("click", () => {
  adventures1.classList.toggle("cato_button_active");
  adventures_bx.classList.toggle("movie_box_action");
});
const adventures_array = movi.filter((e) => {
  return e.genre3 == "Adventures";
});

adventures_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  adventures_bx.appendChild(card);
});
let biology1 = document.getElementById("biology1");
let biology_bx = document.getElementById("biology_bx");

biology1.addEventListener("click", () => {
  biology1.classList.toggle("cato_button_active");
  biology_bx.classList.toggle("movie_box_action");
});
const biology_array = movi.filter((e) => {
  return e.genre4 == "Biology";
});

biology_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  biology_bx.appendChild(card);
});
let animation1 = document.getElementById("animation1");
let animation_bx = document.getElementById("animation_bx");

crime1.addEventListener("click", () => {
  animation1.classList.toggle("cato_button_active");
  animation_bx.classList.toggle("movie_box_action");
});
const animation_array = movi.filter((e) => {
  return e.genre5 == "Animation";
});

animation_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  animation_bx.appendChild(card);
});
let comedy1 = document.getElementById("comedy1");
let comedy_bx = document.getElementById("comedy_bx");

comedy1.addEventListener("click", () => {
  comedy1.classList.toggle("cato_button_active");
  comedy_bx.classList.toggle("movie_box_action");
});
const comedy_array = movi.filter((e) => {
  return e.genre6 == "Comedy";
});

comedy_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  comedy_bx.appendChild(card);
});
let documentaries1 = document.getElementById("documentaries1");
let documentaries_bx = document.getElementById("documentaries_bx");

documentaries1.addEventListener("click", () => {
  documentaries1.classList.toggle("cato_button_active");
  documentaries_bx.classList.toggle("movie_box_action");
});
const documentaries_array = movi.filter((e) => {
  return e.genre7 == "Documentaries";
});

documentaries_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  documentaries_bx.appendChild(card);
});
let drama1 = document.getElementById("drama1");
let drama_bx = document.getElementById("drama_bx");

drama1.addEventListener("click", () => {
  drama1.classList.toggle("cato_button_active");
  drama_bx.classList.toggle("movie_box_action");
});
const drama_array = movi.filter((e) => {
  return e.genre8 == "Drama";
});

drama_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  drama_bx.appendChild(card);
});
let serials1 = document.getElementById("serials1");
let serials_bx = document.getElementById("serials_bx");

serials1.addEventListener("click", () => {
  serials1.classList.toggle("cato_button_active");
  serials_bx.classList.toggle("movie_box_action");
});
const serials_array = movi.filter((e) => {
  return e.genre9 == "Serials";
});

serials_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  serials_bx.appendChild(card);
});
let eth1 = document.getElementById("eth1");
let eth_bx = document.getElementById("eth_bx");

eth1.addEventListener("click", () => {
  eth1.classList.toggle("cato_button_active");
  eth_bx.classList.toggle("movie_box_action");
});
const eth_array = movi.filter((e) => {
  return e.genre10 == "18+";
});

eth_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  eth_bx.appendChild(card);
});
let science_fiction1 = document.getElementById("science_fiction1");
let science_fiction_bx = document.getElementById("science_fiction_bx");

science_fiction1.addEventListener("click", () => {
  science_fiction1.classList.toggle("cato_button_active");
  science_fiction_bx.classList.toggle("movie_box_action");
});
const science_fiction_array = movi.filter((e) => {
  return e.genre11 == "Science-fiction";
});

science_fiction_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  science_fiction_bx.appendChild(card);
});
let horror1 = document.getElementById("horror1");
let horror_bx = document.getElementById("horror_bx");

horror1.addEventListener("click", () => {
  horror1.classList.toggle("cato_button_active");
  horror_bx.classList.toggle("movie_box_action");
});
const horror_array = movi.filter((e) => {
  return e.genre12 == "Horror";
});

horror_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  horror_bx.appendChild(card);
});
let reality_show1 = document.getElementById("reality_show1");
let reality_show_bx = document.getElementById("reality_show_bx");

reality_show1.addEventListener("click", () => {
  reality_show1.classList.toggle("cato_button_active");
  reality_show_bx.classList.toggle("movie_box_action");
});
const reality_show_array = movi.filter((e) => {
  return e.genre13 == "Reality-show";
});

reality_show_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  reality_show_bx.appendChild(card);
});
let family1 = document.getElementById("family1");
let family_bx = document.getElementById("family_bx");

family1.addEventListener("click", () => {
  family1.classList.toggle("cato_button_active");
  family_bx.classList.toggle("movie_box_action");
});
const family_array = movi.filter((e) => {
  return e.genre14 == "Family";
});

family_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  family_bx.appendChild(card);
});
let melodrama1 = document.getElementById("melodrama1");
let melodrama_bx = document.getElementById("melodrama_bx");

melodrama1.addEventListener("click", () => {
  melodrama1.classList.toggle("cato_button_active");
  melodrama_bx.classList.toggle("movie_box_action");
});
const melodrama_array = movi.filter((e) => {
  return e.genre15 == "Melodrama";
});

melodrama_array.forEach((element) => {
  const { img, title, year, url, rate } = element;
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
  melodrama_bx.appendChild(card);
});
// filter all
let all = document.getElementById("all");

window.addEventListener("load", () => {
  movi.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    all.appendChild(card);
  });
});
// filter latest
let latest = document.getElementById("latest");

let latest_array = movi.filter((e) => {
  return e.upload == "latest";
});

window.addEventListener("load", () => {
  latest_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    latest.appendChild(card);
  });
});
// filter year
let year_2022 = document.getElementById("year_2022");

let year_2022_array = movi.filter((e) => {
  return e.year == "2022";
});

window.addEventListener("load", () => {
  year_2022_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2022.appendChild(card);
  });
});

let year_2021 = document.getElementById("year_2021");

let year_2021_array = movi.filter((e) => {
  return e.year == "2021";
});

window.addEventListener("load", () => {
  year_2021_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2021.appendChild(card);
  });
});
let year_2020 = document.getElementById("year_2020");

let year_2020_array = movi.filter((e) => {
  return e.year == "2020";
});

window.addEventListener("load", () => {
  year_2020_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2020.appendChild(card);
  });
});
let year_2019 = document.getElementById("year_2019");

let year_2019_array = movi.filter((e) => {
  return e.year == "2019";
});

window.addEventListener("load", () => {
  year_2019_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2019.appendChild(card);
  });
});
let year_2018 = document.getElementById("year_2018");

let year_2018_array = movi.filter((e) => {
  return e.year == "2018";
});

window.addEventListener("load", () => {
  year_2018_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2018.appendChild(card);
  });
});
let year_2017 = document.getElementById("year_2017");

let year_2017_array = movi.filter((e) => {
  return e.year == "2017";
});

window.addEventListener("load", () => {
  year_2017_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2017.appendChild(card);
  });
});
let year_2016 = document.getElementById("year_2016");

let year_2016_array = movi.filter((e) => {
  return e.year == "2016";
});

window.addEventListener("load", () => {
  year_2016_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2016.appendChild(card);
  });
});
let year_2015 = document.getElementById("year_2015");

let year_2015_array = movi.filter((e) => {
  return e.year == "2015";
});

window.addEventListener("load", () => {
  year_2015_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2015.appendChild(card);
  });
});
let year_2014 = document.getElementById("year_2014");

let year_2014_array = movi.filter((e) => {
  return e.year == "2014";
});

window.addEventListener("load", () => {
  year_2014_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2014.appendChild(card);
  });
});
let year_2013 = document.getElementById("year_2013");

let year_2013_array = movi.filter((e) => {
  return e.year == "2013";
});

window.addEventListener("load", () => {
  year_2013_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2013.appendChild(card);
  });
});
let year_2012 = document.getElementById("year_2012");

let year_2012_array = movi.filter((e) => {
  return e.year == "2012";
});

window.addEventListener("load", () => {
  year_2012_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2012.appendChild(card);
  });
});
let year_2011 = document.getElementById("year_2011");

let year_2011_array = movi.filter((e) => {
  return e.year == "2011";
});

window.addEventListener("load", () => {
  year_2011_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2011.appendChild(card);
  });
});
let year_2010 = document.getElementById("year_2010");

let year_2010_array = movi.filter((e) => {
  return e.year == "2010";
});

window.addEventListener("load", () => {
  year_2010_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    year_2010.appendChild(card);
  });
});

// filter a-z
let letter_1 = document.getElementById("letter_1");

let letter_1_array = movi.filter((e) => {
  return e.letter == "а";
});

window.addEventListener("load", () => {
  letter_1_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_1.appendChild(card);
  });
});
let letter_2 = document.getElementById("letter_2");

let letter_2_array = movi.filter((e) => {
  return e.letter == "б";
});

window.addEventListener("load", () => {
  letter_2_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_2.appendChild(card);
  });
});
let letter_3 = document.getElementById("letter_3");

let letter_3_array = movi.filter((e) => {
  return e.letter == "в";
});

window.addEventListener("load", () => {
  letter_3_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_3.appendChild(card);
  });
});
let letter_4 = document.getElementById("letter_4");

let letter_4_array = movi.filter((e) => {
  return e.letter == "г";
});

window.addEventListener("load", () => {
  letter_4_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_4.appendChild(card);
  });
});
let letter_5 = document.getElementById("letter_5");

let letter_5_array = movi.filter((e) => {
  return e.letter == "д";
});

window.addEventListener("load", () => {
  letter_5_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_5.appendChild(card);
  });
});
let letter_6 = document.getElementById("letter_6");

let letter_6_array = movi.filter((e) => {
  return e.letter == "е";
});

window.addEventListener("load", () => {
  letter_6_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_6.appendChild(card);
  });
});
let letter_7 = document.getElementById("letter_7");

let letter_7_array = movi.filter((e) => {
  return e.letter == "ё";
});

window.addEventListener("load", () => {
  letter_7_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_7.appendChild(card);
  });
});
let letter_8 = document.getElementById("letter_8");

let letter_8_array = movi.filter((e) => {
  return e.letter == "ж";
});

window.addEventListener("load", () => {
  letter_8_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_8.appendChild(card);
  });
});
let letter_9 = document.getElementById("letter_9");

let letter_9_array = movi.filter((e) => {
  return e.letter == "з";
});

window.addEventListener("load", () => {
  letter_9_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_9.appendChild(card);
  });
});
let letter_10 = document.getElementById("letter_10");

let letter_10_array = movi.filter((e) => {
  return e.letter == "и";
});

window.addEventListener("load", () => {
  letter_10_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_10.appendChild(card);
  });
});
let letter_11 = document.getElementById("letter_11");

let letter_11_array = movi.filter((e) => {
  return e.letter == "к";
});

window.addEventListener("load", () => {
  letter_11_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_11.appendChild(card);
  });
});
let letter_12 = document.getElementById("letter_12");

let letter_12_array = movi.filter((e) => {
  return e.letter == "л";
});

window.addEventListener("load", () => {
  letter_12_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_12.appendChild(card);
  });
});
let letter_13 = document.getElementById("letter_13");

let letter_13_array = movi.filter((e) => {
  return e.letter == "м";
});

window.addEventListener("load", () => {
  letter_13_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_13.appendChild(card);
  });
});
let letter_15 = document.getElementById("letter_15");

let letter_15_array = movi.filter((e) => {
  return e.letter == "н";
});

window.addEventListener("load", () => {
  letter_15_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_15.appendChild(card);
  });
});
let letter_16 = document.getElementById("letter_16");

let letter_16_array = movi.filter((e) => {
  return e.letter == "о";
});

window.addEventListener("load", () => {
  letter_16_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_16.appendChild(card);
  });
});
let letter_17 = document.getElementById("letter_17");

let letter_17_array = movi.filter((e) => {
  return e.letter == "п";
});

window.addEventListener("load", () => {
  letter_17_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_17.appendChild(card);
  });
});
let letter_18 = document.getElementById("letter_18");

let letter_18_array = movi.filter((e) => {
  return e.letter == "р";
});

window.addEventListener("load", () => {
  letter_18_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_18.appendChild(card);
  });
});
let letter_19 = document.getElementById("letter_19");

let letter_19_array = movi.filter((e) => {
  return e.letter == "с";
});

window.addEventListener("load", () => {
  letter_19_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_19.appendChild(card);
  });
});
let letter_20 = document.getElementById("letter_20");

let letter_20_array = movi.filter((e) => {
  return e.letter == "т";
});

window.addEventListener("load", () => {
  letter_20_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_20.appendChild(card);
  });
});
let letter_21 = document.getElementById("letter_21");

let letter_21_array = movi.filter((e) => {
  return e.letter == "у";
});

window.addEventListener("load", () => {
  letter_21_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_21.appendChild(card);
  });
});
let letter_22 = document.getElementById("letter_22");

let letter_22_array = movi.filter((e) => {
  return e.letter == "ф";
});

window.addEventListener("load", () => {
  letter_22_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_22.appendChild(card);
  });
});
let letter_23 = document.getElementById("letter_23");

let letter_23_array = movi.filter((e) => {
  return e.letter == "х";
});

window.addEventListener("load", () => {
  letter_23_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_23.appendChild(card);
  });
});
let letter_24 = document.getElementById("letter_24");

let letter_24_array = movi.filter((e) => {
  return e.letter == "ц";
});

window.addEventListener("load", () => {
  letter_24_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_24.appendChild(card);
  });
});
let letter_25 = document.getElementById("letter_25");

let letter_25_array = movi.filter((e) => {
  return e.letter == "ч";
});

window.addEventListener("load", () => {
  letter_25_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_25.appendChild(card);
  });
});
let letter_26 = document.getElementById("letter_26");

let letter_26_array = movi.filter((e) => {
  return e.letter == "ш";
});

window.addEventListener("load", () => {
  letter_26_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_26.appendChild(card);
  });
});
let letter_27 = document.getElementById("letter_27");

let letter_27_array = movi.filter((e) => {
  return e.letter == "щ";
});

window.addEventListener("load", () => {
  letter_27_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_27.appendChild(card);
  });
});
let letter_28 = document.getElementById("letter_28");

let letter_28_array = movi.filter((e) => {
  return e.letter == "Э";
});

window.addEventListener("load", () => {
  letter_28_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_28.appendChild(card);
  });
});
let letter_29 = document.getElementById("letter_29");

let letter_29_array = movi.filter((e) => {
  return e.letter == "ю";
});

window.addEventListener("load", () => {
  letter_29_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_29.appendChild(card);
  });
});
let letter_30 = document.getElementById("letter_30");

let letter_30_array = movi.filter((e) => {
  return e.letter == "я";
});

window.addEventListener("load", () => {
  letter_30_array.forEach((element) => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  <a href="${url}">
          <img src="${img}" alt="${title}"/>
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fas fa-solid fa-heart"></i>
                <i class="fas fa-solid fa-eye"></i>
                <i class="fas fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
        
  `;
    letter_30.appendChild(card);
  });
});
// btns filter
let all_btn = document.getElementById("all_btn");
all_btn.addEventListener("click", () => {
  all_btn.classList.toggle("cato_button_active");
  all.classList.toggle("all_active");
  latest.classList.toggle("latest_active");
});
let latest_btn = document.getElementById("latest_btn");
latest_btn.addEventListener("click", () => {
  latest_btn.classList.toggle("cato_button_active");
  latest.classList.toggle("latest_active");
  all.classList.remove("all_active");
});

let year_btn1 = document.getElementById("year_btn1");
year_btn1.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2022.classList.toggle("year_active");
});
let year_btn2 = document.getElementById("year_btn2");
year_btn2.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2021.classList.toggle("year_active");
});
let year_btn3 = document.getElementById("year_btn3");
year_btn3.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2020.classList.toggle("year_active");
});
let year_btn4 = document.getElementById("year_btn4");
year_btn4.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2019.classList.toggle("year_active");
});
let year_btn5 = document.getElementById("year_btn5");
year_btn5.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2018.classList.toggle("year_active");
});
let year_btn6 = document.getElementById("year_btn6");
year_btn6.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2017.classList.toggle("year_active");
});
let year_btn7 = document.getElementById("year_btn7");
year_btn7.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2016.classList.toggle("year_active");
});
let year_btn8 = document.getElementById("year_btn8");
year_btn8.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2015.classList.toggle("year_active");
});
let year_btn9 = document.getElementById("year_btn9");
year_btn9.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2014.classList.toggle("year_active");
});
let year_btn10 = document.getElementById("year_btn10");
year_btn10.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2013.classList.toggle("year_active");
});
let year_btn11 = document.getElementById("year_btn11");
year_btn11.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2012.classList.toggle("year_active");
});
let year_btn12 = document.getElementById("year_btn12");
year_btn12.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2010.classList.remove("year_active");
  year_2011.classList.toggle("year_active");
});
let year_btn13 = document.getElementById("year_btn13");
year_btn13.addEventListener("click", () => {
  all.classList.remove("all_active");
  latest.classList.remove("latest_active");
  year_2022.classList.remove("year_active");
  year_2021.classList.remove("year_active");
  year_2020.classList.remove("year_active");
  year_2019.classList.remove("year_active");
  year_2018.classList.remove("year_active");
  year_2017.classList.remove("year_active");
  year_2016.classList.remove("year_active");
  year_2015.classList.remove("year_active");
  year_2014.classList.remove("year_active");
  year_2013.classList.remove("year_active");
  year_2012.classList.remove("year_active");
  year_2011.classList.remove("year_active");
  year_2010.classList.toggle("year_active");
});

let search_bx2 = document.getElementsByClassName('search_bx2')[0];



window.addEventListener('load',()=>{
  movi.forEach(element =>{
    const {img, title, year, url} = element;
    let card = document.createElement('a');
    card.href = url;
    card.innerHTML =`
    <img src="${img}" alt="">
                <div class="content2">
                  <h6>${title}</h6>
                  <p>${year}</p>
                </div>
    `
    search_bx2.appendChild(card)
  })
})
search.addEventListener('keyup', ()=>{
  let filter = search.value.toUpperCase();
  let a = search_bx2.getElementsByTagName('a');
  for(let i = 0; i < a.length; i++){
    let b = a[i].getElementsByClassName('content2')[0];
    let c = b.getElementsByTagName('h6')[0];
    let textValue = c.textContent || c.innerText;
    if(textValue.toUpperCase().indexOf(filter) > -1){
      a[i].style.display = '';
    } else{
      a[i].style.display = 'none';
      search_bx2.style.opacity = 1;
      search_bx2.style.visibility ='visible';
    }
    if(search.value == 0){
      search_bx2.style.visibility ='hidden';
      search_bx2.style.opacity = 0;

    }
  }
})