// video Editing  Section video
import video1 from "./data/video1.mp4";
import video2 from "./data/video2.mov";
import video3 from "./data/video3.MP4";
import video4 from "./data/video4.mov";

// Graphic Video ction
// import Graphic1 from "./data/Graphic1.png"
// import Graphic2 from "./data/Graphic2.png"
// import Graphic3 from "./data/Graphic3.jpg"
// import Graphic4 from "./data/Graphic4.png"

// Website Video Section
// import Website1 from "./data/Website1"
// import Website2 from "./data/Website2"
// import Website3 from "./data/Website3"
// import Website4 from "./data/Website4"

// UI/UX Section Video 
// import UI1 from "./data/UI1"
// import UI2 from "./data/UI2"
// import UI3 from "./data/UI3"
// import UI4 from "./data/UI4"


// Content Section Video 
// import Content1 from "./data/Content1"
// import Content2 from "./data/Content2"
// import Content3 from "./data/Content3"
// import Content4 from "./data/Content4 "




const servicesData = {
  "Video Editing": [
    { id: 1, src: video1 },
    { id: 2, src: video2 },
    { id: 3, src: video3 },
    { id: 4, src:  video4 },
  ],
  // "Graphic Designing": [
  //   { id: 1, src: Graphic1 },
  //   { id: 2, src: Graphic2 },
  //   { id: 3, src: Graphic3 },
  //   { id: 4, src: Graphic4 },
  // ],
  "Website Developement": [
    { id: 1, src:   video1  },   //Website1
    { id: 2, src:   video3  },
    { id: 3, src:   video2  },
    { id: 4, src:   video1   },
  ],
  "UI/UX": [
    { id: 1, src:   video1 },  // UI1
    { id: 2, src:   video3  },
    { id: 3, src:   video2 },
    { id: 4, src:   video1  },
  ],
  "Content Writing": [
    { id: 1, src:   video1  },    // Content1
    { id: 2, src:   video3  },
    { id: 3, src:   video2  },
    { id: 4, src:   video1 },
  ],
}

export default servicesData;
