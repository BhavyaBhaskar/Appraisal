/* eslint-disable react/prop-types */
import AveragePassPercentage from "../components/Acedemic/AveragePassPercentage";
import ExtraClass from "../components/Acedemic/ExtraClass";
import IndistrialExpertLecture from "../components/Acedemic/IndustrialExpertLecture";
import MOOC from "../components/Acedemic/MOOC";
import SmartBoardUse from "../components/Acedemic/SmartBoardUse";
import StudentCreditHour from "../components/Acedemic/StudentCreditHour";
import StudentFeedBack from "../components/Acedemic/StudentFeedBack";
import StudentIndustrialVisit from "../components/Acedemic/StudentIndustrialVisit";
import StudentMenteeFeedBack from "../components/Acedemic/StudentMenteeFreeBack";
import ValueAddedCourse from "../components/Acedemic/ValueAddedCourse";
import Workshop from "../components/Acedemic/Workshop";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

function Acedemic({ activeTab, setActiveTab }) {
  return (
    <div className="">
      <div className="flex items-center w-screen justify-center bg-stone-300 p-4 sticky top-0">
        <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
      <div className="px-96">
        <div className="flex-col justify-center bg-stone-200">
          <Workshop />
          <IndistrialExpertLecture />
          <StudentFeedBack />
          <StudentMenteeFeedBack />
          <ValueAddedCourse />
          <ExtraClass />
          <AveragePassPercentage />
          <MOOC />
          <StudentIndustrialVisit />
          <StudentCreditHour />
          <SmartBoardUse />
        </div>
      </div>
      <div className="flex items-center  justify-center bg-stone-300 p-4 sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Acedemic;
