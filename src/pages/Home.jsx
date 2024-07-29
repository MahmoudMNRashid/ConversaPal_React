import MessageContainer from "../components/Home/Messages/MessageContainer";
import Sidebar from "../components/Home/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-v-90   rounded-lg overflow-hidden reverse__background__gradiant  bg-clip-padding max-md:block   ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
