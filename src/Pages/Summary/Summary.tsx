import { PrefetchPageLinks } from "react-router";
import StatusBar from "../../components/StatusBar/StatusBar";
const Summary = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-slate-300 h-[700px]">
        <div className="w-[920px] h-[550px] bg-slate-50 rounded-[10px] flex items-center justify-around">
          <StatusBar />
          <div className="w-[600px] h-[530px] bg-slate-50 rounded-[10px]">
            <div className="flex flex-col ml-[80px]">
              <div className="mt-[30px]">
                <p className="font-[800]">Finishing up</p>
                <p className="font-[500] text-[15px] text-slate-400 mt-[20px]">
                  Double-check everything looks OK defroe confirming.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="w-[400px] h-[210px] bg-slate-300 flex items-center justify-center flex-col rounded-[5px] mt-[20px]">
                  <div className="w-[350px] h-[100px] border-b-[1px] border-slate-500 flex items-center justify-around">
                    <div className="flex flex-col w-[300px]">
                      <p className="font-[500]">Arcade(Monthly)</p>
                      <p className="decoration-violet-500 font-[700] text-slate-400 hover:underline hover:text-violet-500">
                        Change
                      </p>
                    </div>
                    <p className="font-[700]">$9/om</p>
                  </div>
                  <div className="w-[350px] h-[100px] flex flex-col mt-[30px]">
                    <div className="flex items-center justify-around">
                      <p className="w-[300px] text-slate-500">Online service</p>
                      <p className="font-[500]">+$1/om</p>
                    </div>
                    <div className="flex items-center justify-around mt-[20px]">
                      <p className="w-[300px] text-slate-500">Larger storage</p>
                      <p className="font-[500]">+2$om/</p>
                    </div>
                  </div>
                </div> 
                <div className="w-[400px] flex items-center justify-around mt-[20px]">
                  <p className="w-[300px] text-slate-500">Total(per month)</p>
                  <p className="text-violet-500 font-[500]">+$12/om</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
