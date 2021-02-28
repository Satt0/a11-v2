import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'src/App'

export default function Home() {
  return (
    <>
      <App/>
    </>
  )
}
export async function getStaticProps(){
  const data=await fetch("https://desolate-escarpment-45092.herokuapp.com/carousels").then(res=>res.json())
  return {
    props:{
      items:data
    }
  }
}