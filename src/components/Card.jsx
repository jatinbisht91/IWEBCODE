export default function Card({days}) {
  return (
    <div  className="card">
      {days.map((d)=><button>{d}</button>)}
      
    </div>
  );
}
