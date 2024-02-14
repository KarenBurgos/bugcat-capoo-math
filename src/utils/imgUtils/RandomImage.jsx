import cimg1 from "../../Images/Correct/1.gif"
import cimg2 from "../../Images/Correct/2.gif"
import cimg3 from "../../Images/Correct/3.gif"
import cimg4 from "../../Images/Correct/4.gif"
import cimg5 from "../../Images/Correct/5.gif"
import cimg6 from "../../Images/Correct/6.gif"
import cimg7 from "../../Images/Correct/7.gif"
import cimg8 from "../../Images/Correct/8.gif"
import cimg9 from "../../Images/Correct/9.gif"

import iimg1 from "../../Images/Incorrect/1.gif"
import iimg2 from "../../Images/Incorrect/2.gif"
import iimg3 from "../../Images/Incorrect/3.gif"
import iimg4 from "../../Images/Incorrect/4.gif"
import iimg5 from "../../Images/Incorrect/5.gif"
import iimg6 from "../../Images/Incorrect/6.gif"
import iimg7 from "../../Images/Incorrect/7.gif"
import iimg8 from "../../Images/Incorrect/8.gif"
import iimg9 from "../../Images/Incorrect/9.gif"

import defaultImg from "../../Assets/img/Home.gif"

const trueImages = [cimg1,cimg2,cimg3,cimg4, cimg5,cimg6,cimg7,cimg8,cimg9];
const falseImages = [iimg1,iimg2,iimg3,iimg4,iimg5,iimg6,iimg7,iimg8,iimg9];
const defaultImage = defaultImg;

const RandomImage = ({ answer }) => {
    const getRandomImage = (images) => {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    };
  
    let imageToShow;
  
    if (answer === true) {
      imageToShow = getRandomImage(trueImages);
    } else if (answer === ''){
      imageToShow = defaultImage;
    } else if (answer === false) {
      imageToShow = getRandomImage(falseImages);
    }
    console.log(answer)
  
    return <img src={imageToShow} alt="Random Image" className="w-10/12 md:w-[80%]" />;
  };
  
  export default RandomImage;