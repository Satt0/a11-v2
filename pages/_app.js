import '../styles/globals.css'
import '../src/App.scss'



import {Provider} from 'react-redux'
import {useStore} from '../store.js'
function MyApp({ Component, pageProps }) {
const store=useStore({img:pageProps.items,bg:pageProps.bg,index:false,currentIndex:0,view:"home",
currentTheme:'yellow',
date:pageProps.date,
theme:{
  blue:'rgba(176, 216, 243',
  pink:'rgba(243, 176, 243',
  purple:'rgba(218, 176, 243',
  yellow:'rgba(251,230,194'
}

})
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp
