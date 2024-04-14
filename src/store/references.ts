import { PortfolioReference, Reference } from '../types/portfolio';


const ingress: Reference = 
  {
    title: "Trinkets and tidbits",
    description: "Arts and crafts are my thing. Sometimes I code after work, just because it's fun. For me it's a creative outlet or a modern way to craft something I need. As these are made for leisure not for work, so I do take liberties to keep my time / value ratio good. So, one should expect some missing error handling or duplicate code here and there. I hope you enjoy too viewing these trinkets and tidbits!",
  }


const portfolio: PortfolioReference = [
  {
    title: "Advent calendar",
    description: "Advent calendar with jokes in Finnish. The advent calendar was a collaboration with collegues. I did ideation, specification and technical implementation. My collegues collected the jokes.",
    codeUrl: "https://github.com/ainohai/joulu",
    liveUrl: "https://ainohai.github.io/joulu/",
    img: "joulu"
  },
  {
    title: "Matchbox factory",
    description: "We got a task in art school to create match box covers using only horizontal and vertical lines. Match box factory is an automated version of the task and an opportunity to finally try out Svelte.",
    codeUrl: "https://github.com/ainohai/viivatehtava",
    liveUrl: "https://ainohai.github.io/viivatehtava/",
    img: "tulitikkulaatikko"
  },
  {
    title: "Sensor service",
    description: "Kotlin spring boot app taking in sensor data via REST from android application and saving it to database. Next steps will include broadcasting the data for creating art and analysis purposes and making and api for fetching data from certain time.",
    codeUrl: "https://github.com/ainohai/SensorService",
    img: "revontulet"
  },
  {
    title: "Sensor client",
    description: "Android application collecting data from H10 heart rate monitor and sending it to backend. Data transferring is working, UI is currently heavily work in process.",
    codeUrl: "https://github.com/ainohai/SensorApp",
    img: "revontulet"
  },
  {
    title: "Flow matrix creator",
    description: "Generative art project creating different flow matrixes using agents and magnets. Uses p5js and react.",
    codeUrl: "https://github.com/ainohai/FlowMatrixCreator",
    liveUrl: "https://ainohai.github.io/FlowMatrixCreator/",
    img: "flow"
  },
  {
    title: "Masked mess",
    description: "Christmas cards made by multiple layers of canvas using p5js.",
    codeUrl: "https://github.com/ainohai/maskedMess",
    liveUrl: "https://ainohai.github.io/maskedMess/",
    img: "simplex"
  },
  {
    title: "Little demos",
    description: "Small generative art practices for learning p5js. Also trying out recursion and generator functions in generative art.",
    codeUrl: "https://github.com/ainohai/littleDemos",
    liveUrl: "https://ainohai.github.io/littleDemos/",
    img: "trees"
  },
  {
    title: "My colorful demos",
    description: "Small generative art practices for understanding colors and transparency.",
    codeUrl: "https://github.com/ainohai/myColorfulDemos",
    liveUrl: "https://ainohai.github.io/myColorfulDemos/",
    img: "colorful"
  },
  {
    title: "Ant colony library",
    description: "Ant colony simulation library version for generative art. One of the challenges has been to balance artistic aspects with performance as a bit of wandering is more artistically interesting than heading straight to the goal. ",
    codeUrl: "https://github.com/ainohai/antColonyLib",
    img: "antCol"
  },
  {
    title: "Ant colony service",
    description: "Simple nodejs service using ant colony library and passing the data using basic kafka implementation. Was used for scoring different parameters and finding the best values with reinforcement learning python script.",
    codeUrl: "https://github.com/ainohai/antNode",
    img: "antCol2"
  },
  {
    title: "Open & Closed",
    description: "Quick, digitalized art class for visualising how different variations of a simple object look like in an open space.",
    codeUrl: "https://github.com/ainohai/openclosed",
    liveUrl: "https://ainohai.github.io/openclosed/",
    img: "openclosed"
  },
  {
    title: "Tones",
    description: "Sketch for getting basic understanding on how Web audio api works.",
    codeUrl: "https://github.com/ainohai/tones",
    liveUrl: "https://ainohai.github.io/tones/",
    img: "karvat"
  },

]

export const getPortfolio = () => portfolio;
export const getIngress = () => ingress;