import '../styles/globals.css'
import 'src/App.scss'
import 'src/Components/Header/Header.scss'
import 'src/Components/Intro/Intro.scss'
import 'src/Components/Galery/Galery.scss'
import 'aos/dist/aos.css';
import 'src/Components/Galery/Contents/Show/Show.scss'
import 'src/Components/Galery/Contents/Show/Viewpager/ViewPager.scss'
import 'src/Components/Galery/Contents/Show/Viewpager/Carousel/Carousel.scss'
import 'src/Components/Galery/Contents/SidePanel/SidePanel.scss'
import 'src/Components/Galery/Contents/TopPanel/TopPanel.scss'
import 'src/Components/Galery/Contents/SidePanel/Card.scss'
import 'src/Components/Contact/Contact.scss'
import 'src/Components/Ending1/Ending1.scss'

import {Provider} from 'react-redux'
import {useStore} from 'store.js'
function MyApp({ Component, pageProps }) {
const store=useStore({img:pageProps.items,bg:pageProps.bg,index:false,currentIndex:0,view:"home",
currentTheme:'pink',
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
