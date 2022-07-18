import * as React from 'react';

import {withRouter} from 'react-router' 
import './index.css';
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";


class Advertisment extends React.Component {
    
    // myRenderItem() {
    //     return <ImageMagnify {...this.props} />;
    //   }
    FirstItem () {
        return <div>
              <img className="image-gallery-image" src="https://picsum.photos/id/1018/1000/600/" title="主页" alt='主页'/>
              <span className="image-gallery-description">偏倚汇总</span>   
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
        
        function renderLeftNav(onClick, disabled) {
            return (
              <button
                type="button"
                className="image-gallery-left-nav"
                aria-label="Prev Slide"
                disabled={disabled}
                onClick={onClick}
              ><i>
                <FaArrowLeft size={30} />
              </i>
                
              </button>
            );
          }
          function renderRightNav(onClick, disabled) {
            return (
              <button
                type="button"
                className="image-gallery-right-nav"
                aria-label="Next Slide"
                disabled={disabled}
                onClick={onClick}
              ><i>
                <FaArrowRight size={30} />
              </i>
                
              </button>
            );
        }
        const properties = {
            
            useBrowserFullscreen: false,
            showPlayButton: false,
            lazyLoad: true,
            showFullscreenButton:false,
            showThumbnails:false,
            renderLeftNav: renderLeftNav,
            renderRightNav:renderRightNav,
            // renderItem: this.myRenderItem.bind(this),
            
            items:[
                {
                    renderItem: this.FirstItem
                },
                {
                    renderItem: this.SecondItem
                },
                {
                  renderItem: this.ThirdItem
                }
              ]
            };

        return (
            <div className='advertisment'>
                <ImageGallery 
                {...properties} />
                
            </div>
           
        )
    }
}

export default withRouter( Advertisment );