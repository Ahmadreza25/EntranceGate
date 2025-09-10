import StatusBar from "../../components/StatusBar/StatusBar";
import Slidebutton from "../../assets/icons/Slidebutton.png";
const SelectPlan = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-slate-300 h-[700px]">
        <div className="w-[920px] h-[550px] bg-slate-50 rounded-[10px] flex items-center justify-around">
          <StatusBar />
          <div className="w-[600px] h-[530px] bg-slate-50 rounded-[10px]">
            <div className="flex flex-col ml-[80px]">
              <div className="mt-[30px]">
                <p className="font-[800] text-[20px]">Select your plan</p>
                <p className="font-[500] text-[15px] text-slate-500 mt-[20px]">
                  You have the option of monthly or yearly billing.
                </p>
              </div>
              <div className="mt-[30px] flex items-center justify-around mt-[50px]">
                <div className="w-[160px] h-[190px] border-[2px] border-slate-500 rounded-[5px]">
                  <div className="w-[50px] h-[50px] rounded-[100%] bg-amber-400 mt-[20px] ml-[20px]"></div>
                  <div className="mt-[60px] ml-[20px]">
                    <p className="font-[700]">Arcade</p>
                    <p className="font-[400] text-[15px] text-slate-400">$9/mo</p>
                  </div>
                </div>
                <div className="w-[160px] h-[190px] border-[2px] border-slate-500 rounded-[5px]">
                  <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400 mt-[20px] ml-[20px]"></div>
                  <div className="mt-[60px] ml-[20px]">
                    <p className="font-[700]">Advanced</p>
                    <p className="font-[400] text-[15px] text-slate-400">$12/mo</p>
                  </div>
                </div>
                <div className="w-[160px] h-[190px] border-[2px] border-slate-500 rounded-[5px]">
                  <div className="w-[50px] h-[50px] rounded-[100%] bg-violet-400 mt-[20px] ml-[20px]"></div>
                  <div className="mt-[60px] ml-[20px]">
                    <p className="font-[700]">Pro</p>
                    <p className="font-[400] text-[15px] text-slate-400">$15/mo</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-[20px]">
                <div className="w-[500px] h-[60px] bg-slate-200 rounded-[5px] flex items-center justify-around">
                  <p className="font-[700]">Monthly</p>
                  <button>
                    <img src={Slidebutton} alt="" className="w-[50px]" />
                  </button>
                  <p className="font-[700]">Yearly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
