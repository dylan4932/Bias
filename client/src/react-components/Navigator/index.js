import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import { BsCardList } from "react-icons/bs"
import { HiOutlineHome } from "react-icons/hi";
import { BiPlanet } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai"
import { btn_activator} from '../../actions/bias'
import { IoIosPeople, IoIosAperture } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb"

class Navigator extends React.Component {
   
    
    render(){
        return (
          <div className='sidebar'>
          <div className='logo_content'>
              <div className='logo'>
                  <i><BiPlanet/></i>
                  <div className='logo_name'>偏倚目录</div>
              </div>
              <i id="btn" onClick={()=>btn_activator()}>
                  <BsCardList />
              </i>
              
          </div>
          <div className='nav_list'>
              {/* <li>
              <i class='search'><BiSearch/></i> 
              <input placeholder='搜索...'></input>
              </li> */}
              <li>
                  <a href='./../'>
                      <i>
                      <HiOutlineHome />
                      </i>
                      
                      <span className="links_name">主页</span>
                  </a>
                  <span className="tooltip">主页</span>
              </li>
              <li>
                  <a href='./../Bias_Page'>
                      <i>
                      <AiOutlineAppstore/>
                      </i>
                      
                      <span className="links_name">偏倚</span>
                  </a>
                  <span className="tooltip">偏倚</span>
              </li>
              <li>
                  <a href='./../Discussion_Page'>
                      <i>
                      <IoIosPeople />
                      </i>
                      
                      <span className="links_name">论坛</span>
                  </a>
                  <span className="tooltip">论坛</span>
              </li>
              <li>
                  <a href='./../Contact_Page'>
                      <i>
                      <TbMessageCircle />
                      </i>
                      
                      <span className="links_name">联系我们</span>
                  </a>
                  <span className="tooltip">联系我们</span>
              </li>
              <li>
                  <a href='./../About_Page'>
                      <i>
                      <IoIosAperture />
                      </i>
                      
                      <span className="links_name">关于我们</span>
                  </a>
                  <span className="tooltip">关于我们</span>
              </li>
          </div>
      </div> 
            
        )
    }
}

export default withRouter(Navigator);