import React from 'react';

import './index.css';
import Navigator from '../Navigator';

import {withRouter} from 'react-router' 
import ImageGallery from 'react-image-gallery';
import Gallery from '../Gallery';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

class Home extends React.Component {
  
    render(){
        // const flag = 'home';
        return (
            <div className='homepage'>
                <div className='banner'>
                    <h1>偏倚树</h1>
                </div>
                <Navigator/>
                <ImageGallery
                  items={images}
                  // defaultImage={defaultImage}
                  showBullets={false}
                  showIndex={false}
                  showThumbnails={false}
                  lazyLoad={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  // renderCustomControls={someComponent}
                />
                {/* <Content height = '1200px' bias = { this.state.bias }/>
                <Pagination sx={{margin: '10px 38%'}} count={5} variant="outlined" color="primary" /> */}
                <Gallery />
            </div>
            
        )
    }
}

export default withRouter(Home);