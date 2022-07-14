import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import {withRouter} from 'react-router' 
import './index.css';
import Sidebar from '../Sidebar';


class Gallery extends React.Component {

    state = {
        bias: [
            {post: 'Onion', img: 'https://images7.alphacoders.com/697/697207.jpg', line1: '根据临床实践确立研究课题、', line2: '研究设计；规范书写研究题目；'}, 
            {post: '入院率偏倚', img: 'https://images2.alphacoders.com/681/681178.jpg', line1: '选择性偏倚-合格人群定义不当', line2:'以医院住院患者为研究对象...'}, 
            {post: '检出症候偏倚', img:'https://images2.alphacoders.com/124/124850.jpg', line1: '选择性偏倚-诊断偏倚', line2:'一种无辜的暴露，它不会导...'}, 
            {post: '确认偏倚', img:'https://images2.alphacoders.com/695/695928.jpg', line1: '选择性偏倚-合格人群定义不当', line2:'识别研究中包含的个体的系统...'}, 
            {post: '开始时间偏倚', img: 'https://images.alphacoders.com/658/658238.jpg',line1: '选择性偏倚-时间相关偏倚', line2:'在当未能确定暴露或疾病的共...'},
            {post: '北京健康促进会', img: 'https://images3.alphacoders.com/643/643961.jpg',line1: 'Beijing Health Promotion Association，BJHPA', line2:''},]
    }

    render(){
        // const { bias } = this.props;
        return (
            <div className='main-content'>
                <div className='post-content'>
                    {this.state.bias.map( post => (
                        <Card sx={{ maxWidth: 325 , cursor: 'default'}}>
                        <CardMedia
                            component="img"
                            height="120"
                            image={post.img}
                            alt="图片"/>
                        <CardContent >
                            <Typography  gutterBottom variant="body1" component="div">
                            {post.post}
                            </Typography>
                            <Typography fontSize={1} color="text.secondary">
                            {post.line1}
                            
                            </Typography>
                            <Typography  fontSize={1} color="text.secondary">
                            {post.line2}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sz={{position:'fixed', botoom: 20}} size="small">了解更多</Button>
                        </CardActions>
                        </Card>
                    ))}

                </div>
                <Sidebar sx={{float: 'right'}}/>
            </div>
            
        )
    }
}

export default withRouter(Gallery);