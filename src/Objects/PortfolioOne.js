import shorty from "../images/portfolio/shorty.jpg";
import restCountries from "../images/portfolio/rest-countries.jpg";
import sunnySide from "../images/portfolio/sunnyside.jpg";

export const projects = [
  {
    id: "shortly",
    image: shorty,
    info: `Shortly is a "frontEnd Mentor" challenge creates shorted links, i created this challenge using api and react js`,
    link: "https://short-my-url.netlify.app/",
    aosAction: "fade-down",
  },
  {
    id: "rest countries",
    image: restCountries,
    info: `"Where is the world?" is a "frontEnd Mentor", i created this challenge using rest country api and react js, you can simply search the country and know more information about each one, plus you can know further info about the country which you clicked`,
    link: "https://mycountries.netlify.app/",
    aosAction: "fade-right",
  },
  {
    id: "sunny Side",
    image: sunnySide,
    info: `Sunnyside is a landing page and "frontEnd mentor" challenge , built with bootsrap framework`,
    link: "https://ashrafess00.github.io/sunny-side-landing-pagee/",
    aosAction: "flip-left",
  },
];
