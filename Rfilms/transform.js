let download = document.getElementById("download");
const transform = movi.filter((e) => {
  return e.title == "Трансформеры";
});
window.addEventListener("load", () => {
  transform.forEach((element) => {
    const { 
        title, 
        rate, 
        down_img, 
        screen1,
        screen2,
        screen3,
        ph1080,
        ph480,
        ph720,
    } = element;
    let card = document.createElement("div");
    card.classList.add("down_page");
    card.innerHTML = ` 
    <div class="img_bx">
      <img src="${down_img}" alt="">
    </div>
    <div class="cont_bx">
      <h1>${title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe autem ullam vel quam consequuntur sapiente numquam omnis quos repellendus.</p>
      <h3><span>IMDB</span><i class="fas fa-star"></i>7.5</h3>
      <div class="screen_shot_bx">
        <img src="${screen1}" alt="">
        <img src="${screen2}" alt="">
        <img src="${screen3}" alt="">
      </div>
      <div class="btns">
        <a href="${ph480}" download>480p</a>
        <a href="${ph720}" download>720p</a>
        <a href="${ph1080}" download>1080p</a>
      </div>
    </div>`
    download.appendChild(card)
  });
});
