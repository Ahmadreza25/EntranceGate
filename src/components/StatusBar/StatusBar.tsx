import Bar from "./Styled/Bar";
const StatusBar = () => {
  return (
    <div>
      <Bar>
        <div className="w-[270px] h-[400px] flex flex-col">
          <div className="flex items-center justify-around ml-[20px]">
            <div className="w-[45px] h-[45px] border-[1px] border-slate-50 rounded-[100%] flex items-center justify-center">
              <p className="font-[800] text-[20px] text-slate-50">1</p>
            </div>
            <div className="flex flex-col w-[200px] h-[50px] ml-[10px]">
              <p className="font-[300] text-slate-50">STEP1</p>
              <p className="font-[700] text-18px] text-slate-50">YOUR INFO</p>
            </div>
          </div>
          <div className="flex items-center justify-around mt-[25px] ml-[20px]">
            <div className="w-[45px] h-[45px] border-[1px] border-slate-50 rounded-[100%] flex items-center justify-center">
              <p className="font-[800] text-[20px] text-slate-50">2</p>
            </div>
            <div className="flex flex-col w-[200px] h-[50px] ml-[10px]">
              <p className="font-[300] text-slate-50">STEP2</p>
              <p className="font-[700] text-18px] text-slate-50">SELECT PLAN</p>
            </div>
          </div>
          <div className="flex items-center justify-around mt-[25px] ml-[20px]">
            <div className="w-[45px] h-[45px] border-[1px] border-slate-50 rounded-[100%] flex items-center justify-center">
              <p className="font-[800] text-[20px] text-slate-50">3</p>
            </div>
            <div className="flex flex-col w-[200px] h-[50px] ml-[10px]">
              <p className="font-[300] text-slate-50">STEP3</p>
              <p className="font-[700] text-18px] text-slate-50">ADD-ONS</p>
            </div>
          </div>
          <div className="flex items-center justify-around mt-[25px] ml-[20px]">
            <div className="w-[45px] h-[45px] border-[1px] border-slate-50 rounded-[100%] flex items-center justify-center">
              <p className="font-[800] text-[20px] text-slate-50">4</p>
            </div>
            <div className="flex flex-col w-[200px] h-[50px] ml-[10px]">
              <p className="font-[300] text-slate-50">STEP4</p>
              <p className="font-[700] text-18px] text-slate-50">SUMMARY</p>
            </div>
          </div>
        </div>
      </Bar>
    </div>
  );
};

export default StatusBar;
