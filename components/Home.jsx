import { Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <div id="Home" className="mt-5 p-5 text-center w-full">
      <div className=" mt-4 w-[50%]">
        <h3 className="text-green-400">Our Mission</h3>
        <p className="text-center">
          Connecting Communities, Nurturing Nature At TechVedas, our mission is
          to foster a deep connection between communities and the natural world.
          We believe in the transformative power of nature and aim to create
          immersive events that not only celebrate the beauty of the outdoors
          but also inspire a sense of stewardship and environmental
          consciousness. Through curated experiences like hiking adventures,
          bird-watching excursions, and conservation workshops, we invite
          individuals to explore, appreciate, and actively contribute to the
          preservation of our planet. Our events are not just gatherings; they
          are opportunities for like-minded individuals to come together, share
          experiences, and forge lasting connections with both nature and each
          other. Join us on a journey where we celebrate the wonders of the
          natural world, learn from experts, and work hand-in-hand to create a
          sustainable and harmonious future. Connecting..Nature—where community
          meets conservation.
        </p>
      </div>
    </div>
  );
}
export default Home;
