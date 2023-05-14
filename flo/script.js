var Usrdata = document.querySelector(".box");

var userDetail = [
  {
    img: "/assets/target.svg",
    title: "Accurate Position",
    description:
      "Tracking your periods and ovulation with Flo can help you calculate and predict symptoms ahead of time, getting you prepared for the days ahead.",
  },
  {
    img: "/assets/stethescope.svg",
    title: "Medical credibility",
    description:
      "Our team of 100+ doctors and health experts create evidence-based medical articles, tips and recommendations designed to improve your health.",
  },
  {
    img: "/assets/privacy.svg",
    title: "Privacy",
    description:
      "With Flo, you’re in control. You trust us with your personal information, so we’re open about how we keep you safe. And we’ll never share your health data with any company but Flo.",
  },
];

document.getElementById("Card1").innerHTML = userDetail
  .map(
    (card1) =>
      `<div class="card_cont">
 <div class="card_img"><img src=${card1.img}></div>
        <div class="card_title">${card1.title}</div>
        <div class="card_description">${card1.description}</div>
    </div>`
  )
  .join("");
