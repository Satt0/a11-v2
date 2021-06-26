import dynamic from 'next/dynamic'
import Particle from './Components/Particle';
import Display from "./Components/Display/Display";
const Ending1=dynamic(()=>import('./Components/Ending1/Ending1'))
import Intro from './Components/Intro/Intro'
 const DisplayImage=dynamic(()=>import ('./Components/ShowMember'))
 const Wrapper=dynamic(()=>import('./Components/Moment/Wrapper'))
export default function App() {
  // const bg=useSelector(state=>state.bg)
  // const [data,setData]=useState([])
  // const [bgIndex,setBgIndex]=useState(0)
  // useEffect(()=>{
  //   const a=setInterval(()=>{
  //     setBgIndex(i=>(i+1)%bg.length)
  //   },8000)
  //   return ()=>clearInterval(a)
  // },[bg])
  // useEffect(()=>{
  //   console.log(bg);
  //   setData(bg)
  // },[bg])
  return (
    <div
      className="App"
      
    >
      
      {/* <Header /> */}
      <Particle/>
      <Intro />

        
          <Display />
          <h1  className="title-header pt-5 text-center pb-5">#MEMBER</h1>

      <DisplayImage/>
          {/* <Galery /> */}
          <h1  className="title-header pt-5 text-center pb-5">#MOMENT</h1>

      <Wrapper/>
      {/* <Video/> */}
        <Ending1 />

      
    </div>
  );
}
