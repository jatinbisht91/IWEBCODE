export default function TierCard({tiers}) {
  return (
    <div  className="card">
      {tiers.map((d)=><button>{d}</button>)}
      
    </div>
  );
}
