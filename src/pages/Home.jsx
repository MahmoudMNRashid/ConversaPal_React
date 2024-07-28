import MessageContainer from "../components/Home/Messages/MessageContainer";
import Sidebar from "../components/Home/Sidebar/Sidebar";

const Home = () => {
  return (
    <div style={{height:'100vh'}} className="flex   rounded-lg overflow-hidden bg-slate-400 bg-clip-padding max-md:block   ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
