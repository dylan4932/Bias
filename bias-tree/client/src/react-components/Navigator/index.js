import React from 'react';

import './index.css';

import {withRouter} from 'react-router' 
import { BiPlanet, BiAlignLeft, BiCategory, BiSearch } from "react-icons/bi";
import {btn_activator} from '../../actions/bias'
import { Button } from '@mui/material';

class Navigator extends React.Component {
   
    
    render(){
        return (
          <div class='sidebar'>
          <div class='logo_content'>
              <div class='logo'>
                  <i><BiPlanet/></i>
                  <div clas='logo_name'>Categue of Bias</div>
              </div>
              <i id="btn" onClick={()=>btn_activator()}>
                  <BiAlignLeft />
              </i>
              
          </div>
          <div class='nav_list'>
              {/* <li>
              <i class='search'><BiSearch/></i> 
              <input placeholder='搜索...'></input>
              </li> */}
              <li>
                  <a
                   href='./../'>
                      <i>
                      <BiCategory/>
                      </i>
                      
                      <span class="links_name">主页</span>
                  </a>
                  <span class="tooltip">主页</span>
              </li>
              <li>
                  <a href='./Bias_Page'>
                      <i>
                      <BiCategory/>
                      </i>
                      
                      <span class="links_name">偏倚</span>
                  </a>
                  <span class="tooltip">偏倚</span>
              </li>
              <li>
                  <a href='#'>
                      <i>
                      <BiCategory/>
                      </i>
                      
                      <span class="links_name">论坛</span>
                  </a>
                  <span class="tooltip">论坛</span>
              </li>
              <li>
                  <a href='#'>
                      <i>
                      <BiCategory/>
                      </i>
                      
                      <span class="links_name">联系我们</span>
                  </a>
                  <span class="tooltip">联系我们</span>
              </li>
              <li>
                  <a href='#'>
                      <i>
                      <BiCategory/>
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