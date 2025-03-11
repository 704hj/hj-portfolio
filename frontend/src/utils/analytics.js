import ReactGA from "react-ga4";

const TRACKING_ID = "G-LVBZMVETTV";

const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send("pageview"); // 페이지뷰 자동 전송
};

export default initGA; 
