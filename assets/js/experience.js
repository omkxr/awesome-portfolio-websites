AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Quality Control Officer",
    cardImage: "assets/images/experience-page/klab.png",
    place: "Khandelwal Laboratories Pvt. Ltd.",
    time: "(Dec, 2020 - Oct 2021)",
    desp: "<li>Carried out sample analysis of R&D sample and Raw Materials</li><li>In Instrumentation have been working on Karl Fischer Titrator, Gas Chromatography, UV – Vis   Spectroscopy , Melting point apparatus, Specific Optical Rotaion apparatus.</li>",
  },
  {
    title: "Recognized Developer - Freelancing",
    cardImage: "assets/images/experience-page/xda.png",
    time: "-",
    place: "XDA Developers",
    desp: "<li>Developed Custom Android Rom based on AOSP sources</li><li>Developed Custom Android kernel based on Linux kernel sources</li><li>Custom Rom Device Bringup</li><li>Contributed to Open Source Project</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Lineage OS / CyanogenMod",
    cardImage: "assets/images/experience-page/lineage.png",
    description:
      "CM 14 bringup for Moto X, CM 13 Contributor for Moto X",
  },
  {
    title: "Paranoid Andorid / AOSPA",
    cardImage: "assets/images/experience-page/pa.png",
    description:
      "Moto X Device Maintainer for Paranoid Android",
  },
  {
    title: "Screw'd OS",
    cardImage: "assets/images/experience-page/screwd.png",
    description:
      "Developer, Device Maintainer for Nexus 5x and Honor View 10",
  },
  {
    title: "Honor Open Source Project",
    cardImage: "assets/images/experience-page/honor.jpg",
    description:
      "Sponsered from Honor to work in HOSP in bringing up Custom Android Rom",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
