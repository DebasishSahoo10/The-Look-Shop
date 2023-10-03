import "../App.css";
import { Logo } from "../components/Logo/Logo";
import { Nav } from "../components/Nav/Nav";
import { Hero } from "../components/Hero/Hero";
import { Categories } from "../components/Categories/Categories";
import { StoryBoard } from "../components/StoryBoard/StoryBoard";
import { Socials } from "../components/Socials/Socials";

const Landing = () => {
  return (
    <div className="landingContainer">
      <Logo/>
      <Nav/>
      <Hero/>
      <Categories/>
      <StoryBoard/>
      <Socials/>
    </div>
  );
};
 
export default Landing;