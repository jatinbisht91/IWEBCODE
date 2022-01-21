import "./styles.css";
import Header from "./components/Header"
import Content1 from "./components/Content1"
import Content2 from "./components/Content2"
import Footer from "./components/Footer"

export default function App() {
  const days=["1 day","7days","30 days","1 year","5 year"]
  const tiers=["Tier 1","Tier 2","tier 3","Tier 4","Tier 5"]
  const text="0.000 USD"
  return (
    <div className="App">
      <Header/>
      <Content1 text={text}/>
      <Content2 days={days} tiers={tiers} text="0.00 USD"/>
      <Footer/>
    </div>
  );
}
