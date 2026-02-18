
import NavItem from "./NavItem.jsx";
import SlideHome from "./SlideHome.jsx";
import VideoSection from "./IntroVideo.jsx";

function Home() {
  return (
    <section className="bg-[#FFE9D2] p-4 md:-mt-15">
      <SlideHome/>
      <div className="pt-8">

      <VideoSection/>
      </div>
      <div className="overflow-hidde mb-8">
        
      </div>
     <NavItem/>
    </section>
  );
}

export default Home;
