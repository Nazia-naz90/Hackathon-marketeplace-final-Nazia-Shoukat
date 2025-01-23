import Hero from "./components/hero";
import Editors from "./components/editorPick";
import FeaturedPost from "./components/featuredPost";
import Header from "./components/navbar";
import Footer from "./components/footerFirst";
import FeatureProduct from "./components/featureProduct";
// import FeatureProduct from "./components/featureProduct";


export default async function Home() {


  return (
    <div>
     <Header/>
     <Hero/>
     <Editors/>
     <FeatureProduct/> 
     <FeaturedPost/>
     <Footer/>
    </div>
    

       );
}
