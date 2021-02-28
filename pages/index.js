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
  const url=process.env.NODE_ENV==='production'?'https://desolate-escarpment-45092.herokuapp.com':'http://localhost:1337'
  const data=await fetch(`${url}/carousels`).then(res=>res.json())
  return {
    props:{
      items:data
    }
  }
}