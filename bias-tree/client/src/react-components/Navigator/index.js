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
          <div class='sidebar'>
          <div class='logo_content'>
              <div class='logo'>
                  <i><BiPlanet/></i>
                  <div clas='logo_name'>偏倚目录</div>
              </div>
              <i id="btn" onClick={()=>btn_activator()}>
                  <BsCardList />
              </i>
              
          </div>
          <div class='nav_list'>
              {/* <li>
              <i class='search'><BiSearch/></i> 
              <input placeholder='搜索...'></input>
              </li> */}
              <li>
                  <a href='./../'>
                      <i>
                      <HiOutlineHome />
                      </i>
                      
                      <span class="links_name">主页</span>
                  </a>
                  <span class="tooltip">主页</span>
              </li>
              <li>
                  <a href='./../Bias_Page'>
                      <i>
                      <AiOutlineAppstore/>
                      </i>
                      
                      <span class="links_name">偏倚</span>
                  </a>
                  <span class="tooltip">偏倚</span>
              </li>
              <li>
                  <a href='#'>
                      <i>
                      <IoIosPeople />
                      </i>
                      
                      <span class="links_name">论坛</span>
                  </a>
                  <span class="tooltip">论坛</span>
              </li>
              <li>
                  <a href='#'>
                      <i>
                      <TbMessageCircle />
                      </i>
                      
                      <span class="links_name">联系我们</span>
                  </a>
                  <span class="tooltip">联系我们</span>
              </li>
              <li>
                  <a href='#'>
                      <i>
                      <IoIosAperture />
                      </i>
                      
                      <span class="links_name">关于我们</span>
                  </a>
                  <span class="tooltip">关于我们</span>
              </li>
          </div>
      </div> 
            
        )
    }
}

export default withRouter(Navigator);