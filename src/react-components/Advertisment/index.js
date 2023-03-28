import * as React from 'react';

import {withRouter} from 'react-router' 
import './index.css';
// import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


class Advertisment extends React.Component {
    
    // myRenderItem() {
    //     return <ImageMagnify {...this.props} />;
    //   }
    FirstItem () {
        return <div>
               
          </div>;
    }
    SecondItem () {
        return <div>
              <img className="image-gallery-image" src="https://picsum.photos/id/1015/1000/600/" title="偏倚" alt='偏倚'/>
              <span  className="image-gallery-description">偏倚汇总</span>
          </div>;
    }
    ThirdItem () {
        return <div>
              <img className="image-gallery-image" src="https://picsum.photos/id/1019/1000/600/" title="关于我们" alt='关于我们'/>
              <span className="image-gallery-description">加入我们一起</span>
          </div>;
    }
    render(){
        
        const{ title } = this.props;
        return (
            <div className='advertisment'>
                <img className="image-gallery-image" src="https://picsum.photos/id/1015/1000/600/" title="主页" alt='主页'/>
                <div className="image-gallery-description">{ title }</div>  
                {/* <ImageGallery 
                {...properties} /> */}
                
            </div>
           
        )
    }
}

export default withRouter( Advertisment );