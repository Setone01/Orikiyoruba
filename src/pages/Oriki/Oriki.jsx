import React from 'react'
import Banner from '../../component/BannerUI/banner'
import Oro from '../../Assets/images/smiling-g1b1c4bb77_1920.jpg'
import PlayList from './PlayList/PlayList'
// import Player from './PlayList/Player'

const Oriki = () => {
  return (
    <div>
    <Banner title={"Oriki Yoruba"} image={Oro}/>
    <PlayList/>
    {/* <Player/> */}

    </div>
  )
}

export default Oriki