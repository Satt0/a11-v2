import '../styles/globals.css'
import 'src/App.scss'
import 'src/Components/Galery/Contents/Show/Show.scss'
import 'src/Components/Contact/Contact.scss'
import 'src/Components/Ending1/Ending1.scss'
import 'src/Components/Galery/Contents/SidePanel/Card.scss'
import 'src/Components/Galery/Contents/SidePanel/SidePanel.scss'
import 'src/Components/Galery/Contents/TopPanel/TopPanel.scss'
import 'src/Components/Galery/Contents/Show/Viewpager/Carousel/Carousel.scss'

import 'src/Components/Galery/Contents/Show/Viewpager/ViewPager.scss'
import 'src/Components/Galery/Galery.scss'
import 'src/Components/Header/Header.scss'
import 'src/Components/Intro/Intro.scss'
import {Provider} from 'react-redux'
// import store from 'src/Store/Store'
import {useStore} from 'store.js'
function MyApp({ Component, pageProps }) {
const store=useStore({img:pageProps.items,index:false,currentIndex:0})
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp
