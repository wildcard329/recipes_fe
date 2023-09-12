import React, { useContext, useEffect } from "react";
import { pageNavContext } from "../state/contexts";
import homeNavLinks from "../assets/configs/homePageNav.json";
import section1Img from "../assets/images/rec-app-home-section-1.jpg";
import section2Img from "../assets/images/rec-app-home-section-2.jpg"
import communityImg from "../assets/images/rec-app-home-cta-community.jpg";
import recipeImg from "../assets/images/rec-app-home-cta-recipe.jpg";
import cookbookImg from "../assets/images/rec-app-home-cta-cookbook.jpg";
import "./HomePage.css";
// import "./page.css";

const HomePage = () => {
  const { setNavLinks } = useContext(pageNavContext);
  
  useEffect(() => {
    setNavLinks(homeNavLinks);
  }, []);

  return(
    <div className="page-content">
      <section id="home-page-hero" className="page-section">
        <a className="anchor-target" id="hero"></a>
        <h1 className="home-page-header">Welcome to Recipe Rollout!</h1>
        <p className="hero-text">Unleash a world of flavor with just a tap - discover an endless array of delectable recipes on Recipe Rollout and turn every meal into a gourmet experience!</p>
        <p className="hero-text mobile-hidden">Be the star of the kitchen - share your culinary masterpiece with the world on Recipe Rollout and inspire fellow food lovers!</p>
        <p className="hero-text mobile-hidden">Get ready to turn your virtual recipe collection into a stunning, personalized cookbook with our upcoming feature on Recipe Rollout - preserving your culinary legacy in style!</p>
      </section>
      <section id="home-page-ad-1" className="page-section">
        <a className="anchor-target" id="section-1"></a>
        <h2>Thank you for choosing Recipe Rollout!</h2>
        <img src={section1Img} alt="recipe-rollout-img" className="home-page-sec-img float-left space-buffer-right mobile-hidden" />
        <p className="section-ad-content">Welcome to Recipe Rollout - the ultimate recipes app that pusts you in the chef's seat! Elevate your culinary prowess by not only exploring a vast array of tried-and-true recipes but also by sharing your very own kitchen masterpieces with a global community of food enthusiasts. With Recipe Rollout, your creativity knows no bounds. Easily add and customize your recipes, accompanied by mouthwatering photos that showcase your culinary finesse. Become part of a dynamic food-loving family, where sharing is caring and innovation knows no limits. Whether it's your grandma's cherished secret recipe or your latest culinary experiment, CookBook Connect celebrates your unique flavors and invites you to savor the joy of cooking together. Get ready to dive into a world of taste, inspiration, and connection - join us now and let your recipes shine!</p>
      </section>
      <section id="home-page-ad-2" className="page-section">
        <a className="anchor-target" id="section-2"></a>
        <h2>Connect with our community of food enthusiasts!</h2>
        <img src={section2Img} alt="recipe-rollout-img" className="home-page-sec-img float-right space-buffer-left mobile-hidden" />
        <p className="section-ad-content">Ignite your passion for cooking and connect with a vibrant community of fellow recipe enthusiasts on Recipe Rollout! Join us to savor the joy of cooking in the company of kindred spirits who understand that the best recipes are the ones shared among friends.</p>
      </section>
      <section id="home-page-ad-3">
        <a className="anchor-target" id="section-3"></a>
        <h2>Utilize our amazing features!</h2>
        <div className="home-page-ad-3-content">
          <article className="home-article">
            <h3>Share your recipes</h3>
            <p>Share your culinary experiences with other users on Recipe Rollout and inspire fellow food lovers!</p>
            <img src={communityImg} alt="join our community" className="home-article-img mobile-hidden" />
          </article>
          <article className="home-article">
            <img src={recipeImg} alt="view our recipes" className="home-article-img mobile-hidden" />
            <h3>View our recipe collection</h3>
            <p>Need quick meal ideas? Take a look at other user recipes and whip up a satisfying, memorable meal!</p>
          </article>
          <article className="home-article">
            <h3>Coming soon - Cookbook</h3>
            <p>We are excited to announce an upcoming new feature: Cookbook. Stay tuned for more details.</p>
            <img src={cookbookImg} alt="coming soon" className="home-article-img mobile-hidden" />
          </article>
        </div>
      </section>
    </div>
  )
}

export default HomePage;
