/* eslint-disable react/prop-types */
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

function Research({ activeTab, setActiveTab }) {
  return (
    <div>
      <div className="flex items-center  justify-center bg-stone-300 p-4 sticky top-0">
        <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
      <div className="h-screen">Research</div>
      <div className="flex items-center  justify-center bg-stone-300 p-4 sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Research;
