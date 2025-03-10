import ReactGA from "react-ga4";

const TRACKING_ID = "G-LVBZMVETTV"; 

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send("pageview");
};
