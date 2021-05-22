import React, { useState, useEffect ,useCallback} from "react";
import ScrollIntoView from "react-scroll-into-view";
import {Drawer,makeStyles} from  '@material-ui/core'

const useStyles=makeStyles((theme)=>({
  drawer:{
    '& > div > div  > li':{
      listStyleType:'none',
      textAlign:'center',
      padding:theme.spacing(1)
    },
      padding:theme.spacing(2),
      display:'grid',
      gridTemplateRows:'max-content 1fr',
      paddingTop:'13vh',
      overflow:'auto',
      width:'100vw',
     height:'100vh',
      maxWidth:500,
      backgroundColor:"#ead4c3cc",
      zIndex:123123123123,
      [theme.breakpoints.down('sm')]:{
        padding:'0',
        paddingTop:'10vh',
      }
  },
  soundClound:{
    zIndex:234234,
    
    paddingTop:theme.spacing(2),
    margin:'0 auto',
    width:'90%'
  }
}))
export default function Header() {
  const styles=useStyles()
  const [toggle, setToggle] = useState(false);
  const [helper,setHelper]=useState(true)
  const [sc, setSc] = useState(true);
  const hideAfterClick=useCallback(()=>{
    setTimeout(()=>{
      setToggle(false)
    },0)
  },[])

  useEffect(() => {
    const a=setTimeout(()=>{
      setHelper(false)
    },10000)
    return () => {
      clearTimeout(a)
    }
  }, [])
  useEffect(() => {
    let a;
    if (!sc) {
      a = setTimeout(() => {
        setSc(true);
      }, 4000);
    }
    return () => {
      clearTimeout(a);
    };
  }, [sc]);

  return (
    <>
      <button
        className="btn-toggle"
        onClick={() => {
          setToggle((a) => !a);
          setHelper(false)
        }}
      >
        
        <img src="/favicon.ico" width="42px"/>
        <img alt="click here"  className="cursor-helper" src="/pointer.png" width="34px" style={{background:'transparent',display:helper?"":'none'}}/>
      </button>
     
       
       
        <Drawer variant="persistent"  anchor="right" open={toggle} onClose={()=>{setToggle(false)}}>
       <div className={styles.drawer}>
       <div>
       <ScrollIntoView selector="#story" onClick={hideAfterClick}>
              <li className="hover-link" >  Welcome</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#galery" onClick={hideAfterClick}>
              <li className="hover-link">Intro</li>
            </ScrollIntoView>
            <ScrollIntoView selector="#video" onClick={hideAfterClick}>
              <li className="hover-link">Video</li>
            </ScrollIntoView>
       </div>
            <div className={styles.soundClound}>
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/929815216&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
       </div>
       
    </Drawer>
        
      
    </>
  );
}
