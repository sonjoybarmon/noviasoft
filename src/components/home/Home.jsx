import Layout from "../layout";
import Brands from "./Brands/Brands";
import Category from "./Category/Category";
import Codes from "./Codes/Codes";
import Details from "./Details/Details";
import GreatIdeas from "./GreatIdeas/GreatIdeas";
import HeroArea from "./HeroArea/HeroArea";
import Products from "./Products/Products";
import Revisit from "./Revisit/Revisit";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroArea />
        <Category />
        <Products />
        <Revisit />
        <Details />
        <Codes />
        <GreatIdeas />
        <Brands />
        <Codes />
        <GreatIdeas />
      </Layout>
    </div>
  );
};

export default Home;
