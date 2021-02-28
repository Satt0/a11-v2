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
  const data=await fetch("http://localhost:1337/carousels").then(res=>res.json())
  return {
    props:{
      items:data
    }
  }
}