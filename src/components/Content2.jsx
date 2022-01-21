import Card from "./Card"
import TierCard from "./TierCard"


export default function Content2({days,tiers,text}) {
  return (
    <div className="content2">
        <div className="title"><span>Timeframe</span></div>
        <Card days={days} />
        <div className="title2">
          <div class="left"><span>Enable Accelerated APY</span></div>
          <div class="right"><i class="fa-solid fa-toggle-on" ></i></div>
         
        </div>
        <div>
        <h3>Select Tiers</h3>
        <TierCard tiers={tiers}/>
        </div>
        <div className="last">
              <h3 >ROI at current rates</h3>
              <input value={text}/>
              <h3>~cake 0.000 +0.00000 DON</h3>
          </div>
      
    </div>
  );
}



