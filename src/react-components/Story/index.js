import React from 'react';

import './index.css';

import { withRouter } from 'react-router' 
import PortalList from '../Portal_list';
import Footer from '../footer';
import StoryIntro from './Story_intro';
import StoryContent from './Story_content';

import story_col1 from '../../onion_icons/story-col1.png'
import story_col2 from '../../onion_icons/story-col2.png'
import story_col3 from '../../onion_icons/story-col3.png'
import StoryConclude from './Story_conclude';


class Story_Page extends React.Component {
   
    
    render(){
        return (
            <div className='introduction'>
                <PortalList/>
                <StoryIntro/>
                <div className='success-story'>
                    <p className='paper-text'>所有 <span className='bold-text p-en'>Healthcare companies</span> 都需要针对 <span className='bold-text p-en'>KOL</span> 进行系统的管理，与 <span className='bold-text p-en'>KOL</span>  建立战略性的合作。医疗领域近30年来的发展，伴随着跨国 <span className='bold-text p-en'>Healthcare companies</span> 在医疗领域的引领， <span className='bold-text p-en'>Healthcare companies</span> 与 <span className='bold-text p-en'>KOL</span>  的互动集中体现在为中国的 <span className='bold-text p-en'>KOL</span>  提供“前沿的信息，新的 药物& 器械引入、新的治疗方法、新的研究的传播，新的学术交流平台的建立”。在较早的历史中，<span className='bold-text p-en'>KOL</span> 获得信息、进行发展，与 <span className='bold-text p-en'>Healthcare companies</span> 结成了成功的合作模式。</p>
                    <p className='paper-text'>随着信息全球化的发展，中国医疗 <span className='bold-text p-en'>KOL</span>  自身获取前沿信息的能力快速提高，已经不再需要 <span className='bold-text p-en'>Healthcare companies</span> 提供医疗信息，甚至 <span className='bold-text p-en'>KOL</span>  的专业信息已经远远领先于 <span className='bold-text p-en'>Healthcare companies</span> 人员的速度和深度。传统合作方式已经无法为 <span className='bold-text p-en'>KOL</span>  提供高附加值的价值， <span className='bold-text p-en'>Healthcare companies</span> 针对 <span className='bold-text p-en'>KOL</span>  的管理已陷入困局，只能停留在“投入资源”的层面，成为了“单纯的 <span className='bold-text p-en'>Payer</span> ”，也无法获得 <span className='bold-text p-en'>KOL</span> 的感佩，处于被动的地位。</p>
                    <p className='paper-text'>而另一方面， <span className='bold-text p-en'>Healthcare companies</span> 每年在组织大量的会议，投入巨大。但 <span className='bold-text p-en'>KOL</span>  甚至普通的医生对此些会议没有兴趣。</p>
                    <p className='paper-text'>一个小范围的调研：<span className='bold-text p-en'>Healthcare companies</span> 的学术会议到会率平均不足<span className='bolx-text p-en'>50%</span>，前往参会的医生与计划邀约的医生相去甚远，匹配率也不足<span className='bold-text p-en'>25%</span>；试想一下，全国总体来看，投入是巨大的，但这些活动的效率不高，加之人力的成本，消耗是惊人的。</p>
                    <p className='paper-text'><span className='bold-text p-en'>Healthcare companies</span> 与 <span className='bold-text p-en'>KOL</span>  的互动陷入了困局……</p>
                </div>
                <StoryContent/>
                <div className='success-story'>
                    <p className='paper-text'>会前，我们的业务人员邀请 <span className='bold-text p-en'>KOL</span> 准备他们拟进行的想法、研究计划、或病例报告。</p>
                    <p className='paper-text'>会中，<span className='bold-text p-en'>KOLs</span> 通过界面上的问题与 <span className='bold-text p-en'>Onion</span> 进行相关研究的信息交互，<span className='bold-text p-en'>Onion</span> 系统记下这些信息，通过 <span className='bold-text p-en'>AI</span> 算法当场提供了这个研究的方案。<span className='bold-text p-en'>KOLs</span> 和他的助手们 饶有兴趣的和自己先前的想法进行对照、思考。 <span className='bold-text p-en'>BJHPA | RDG</span> 小组的专家对 <span className='bold-text p-en'>Onion</span> <span id='copy-right'>TM</span>  方案进一步的解释，引发了 <span className='bold-text p-en'>KOLs</span> & 助手们的热烈讨论……</p>
                    <p className='paper-text'>会后，专家们都意犹未尽，纷纷表示这样的交流非常有趣，并且收获很大。希望常规性的举行这样的会议……</p>
                </div>
                <div className='story-list'>
                    <div className='subtitle-col'>
                        <div className='story-doc-icon'>
                            <img src={story_col1} alt='story-colomn-icon1'></img>
                        </div>
                        
                        <p className='paper-text'>我是一名外科医生，我们想做一些研究可并不容易，<span className='bold-text p-en'>RCT</span> 对我们来说较为困难，所以我想了解一下如何做“真实世界研究”，但是我身边了解这些的专家不好找。今天 <span className='bold-text p-en'>Onion</span> 告诉我，我们这类与操作相关的研究中，“干预措施”存在的“异质性”需要在研究设计时充分的考虑。这令我很有收获，此前我对“异质性”的问题几乎不了解，我很清楚每个患者的手术都不可能完全一致，甚至差别很大，这在研究中是否是个大问题？我一直困惑。</p>
                        <p className='paper-text'>今天我了解了它，它的本质是“干预措施的异质性问题”，更开心的是， <span className='bold-text p-en'>Onion</span> 还告诉我如何处理这些“异质性”的策略。这太有用了！</p>
                    </div>
                    <div className='subtitle-col'>
                        <div className='story-doc-icon'>
                            <img src={story_col2} alt='story-colomn-icon2'></img>
                        </div>
                        <p className='paper-text'>我们科室进行过几个科研项目，其中也有<span className='bold-text p-en'>RCT</span>，写方案的时候有点无助，非常希望有个专家能给到一些具体的帮助。有时我们不得不效仿已经发表的文献的研究设计，但是别人的研究设计并不能达成我们的研究目的。</p>
                        <p className='paper-text'><span className='bold-text p-en'>Onion</span> 给我的建议非常实用，今天 <span className='bold-text p-en'>Onion</span> 根据我的研究情况建议我进行“可变区组随机”的设计，之前我没有听过这种随机设计。这非常适合我的研究。</p>
                        <p className='paper-text'>我向会议的组织者提出了期望，下次我们可以请 <span className='bold-text p-en'>BJHPA | RDG</span> 的老师介绍一下有多少种随机，他们适用于什么研究。</p>
                    </div>
                    <div className='subtitle-col'>
                        <div className='story-doc-icon'>
                            <img src={story_col3} alt='story-colomn-icon1'></img>
                        </div>
                        <p className='paper-text'>来参会时，我带来的是一个”回顾性队列研究“，<span className='bold-text p-en'>Onion</span> 提醒我可能存在“未亡时间偏倚”。这个词我闻所未闻，但今天了解了这个偏倚的存在会严重影响我的研究结论。如果对这个偏倚不做任何处理或探讨，大概率可能会影响文章的发表。</p>
                        <p className='paper-text'>偏倚（<span className='bold-text p-en'>Bias</span>）这问题对于“真实世界研究”如此重要，我需要探究一下。“<span className='bold-text p-en'>Onion</span> 会议”很有趣，希望今后多多举行。</p>
                    </div>
                </div>
                <div className='story-container'>
                    
                    <ul className='story-ul'>
                        <p className='story-text'> 看着专家们卓有收获的样子，一些想法跃入了我的思想：</p> 
                        <li className='story-li'> “<span className='bold-text p-en'>Onion</span> 会议”！专家们进行的是自己的研究探讨、自己的研究想法得到了建议、不容易的研究方案可以迅速的形成；</li>   
                        <li className='story-li'><span className='bold-text p-en'> Onion</span> 用临床医生容易理解的问题与医生交流研究的信息，这使医生们的研究变得轻松起来；</li>
                        <li className='story-li'> 辅助做好临床研究，是 <span className='bold-text p-en'>KOLs</span> 和专家们显而易见的兴趣和需求；</li>
                        <li className='story-li'><span className='bold-text p-en'> Onion</span> 会议覆盖专家的效率很高，质量也有保证。</li>
                    </ul>

                    <p className='story-text'>我似乎能够感觉到“创新”火种就在我身边，我想我可以找到它……</p>     

                    <div className='story-content'>
                        <p className='portal-text'><span className='bold-text p-en'>Healthcare company</span> 与 <span className='bold-text p-en'>KOL</span> 新的学术互动形式、新的 <span className='bold-text p-en'>KOL</span> 合作模式</p>    
                        <p className='portal-text'>使 <span className='bold-text p-en'>Healthcare company</span> 的人员成为 <span className='bold-text p-en'>KOL</span> 的咨询专家</p>  
                        <p className='portal-text'>使 <span className='bold-text p-en'>Healthcare company</span> 成为业界创新领先</p>  
                    </div>          
                </div>
                <StoryConclude/>
                <div className='story-container'>
                    <div className='success-story'>
                        <p className='paper-text'>几年以来，一家专门从事医疗研究机构一直在进行一系列医学科研项目，征集有科研想法的医生的研究方案，并从中选取一些有临床价值的研究进行资助。我们参与了这个项目。<span className='bold-text p-en'>2022</span>年，这家机构引入了一个临床科研的 <span className='bold-text p-en'>AI</span> 系统—— <span className='bold-text p-en'>Onion</span> 系统，加入到项目中。项目后，很多研究者医生向我们表示了感谢，称这个项目非常有趣，同时对他们帮助也很大。</p>
                        <p className='paper-text'>我的好奇心被激发起来，很想了解这个项目研究者医生为什么那么喜欢。随着深入的了解我渐渐发现：</p>
                        <p className='paper-text'><span className='dot'> · </span> 参加项目的科研医生用回答 <span className='bold-text p-en'>Onion</span> 系统交互界上的问题进行研究信息的交互。可以看到，<span className='bold-text p-en'>Onion</span> 系统的使用规范了医生们的方案书写。</p>
                        <p className='paper-text'><span className='dot'> · </span>提交的方案非常规范使其非常容易进行阅读，评审专家们的评审工作变得轻松很多。同时，<span className='bold-text p-en'>Onion</span> 系统提出很多的提示使方案作者在交互、反馈中收获很多，获得很多研究者们的好评。</p>
                        <p className='paper-text'><span className='dot'> · </span><span className='bold-text p-en'>Onion</span>系统在交互信息之后瞬时就向研究者提供了研究的建议框架“<span className='bold-text p-en'>framework</span>”，使研究者可轻松的就可以完成研究方案的撰写</p>
                        <p className='paper-text'><span className='dot'> · </span>经过 机构 <span className='bold-text p-en'>RDG</span> 小组专家和其他评审专家的审议，优秀的研究获得了不多的资助。即使没有获得资助的研究者也很喜欢这个项目，纷纷表示后一年还会参与。</p>

                        <p className='paper-text'>我在思考：</p>
                        <p className='paper-text'>是否我们也可以引入 <span className='bold-text p-en'>Onion</span> 系统，发起我们所从事的治疗领域的一些活动，这些活动可以使医生以科研的方式了审视自己治疗实践，更加清晰的认知我们产品使用的“患者画像”。</p>
                        <p className='paper-text'>对我们来说，<span className='bold-text p-en'>Onion</span> 系统也是一个很好的学习系统，帮助我们提高，帮助我们针对医生自己感兴趣的研究话题进行高质量的对话。</p>
                        <p className='paper-text'>我在医学领域的经验告诉我，“为 <span className='bold-text p-en'>KOL</span> 提供一个研究解决方案” <span className='bold-text p-en'>vs</span> “单纯传递一些研究暂时用不到的知识、信息”的价值更大。</p>

                        <p className='conclude-text'> 是的！我们未来的方向应该是：从“传递知识” 转变为 “提供方案”！</p>
                    </div> 

                            
                </div>
                <br/>
                <Footer/>
            </div>    
        )
    }
}

export default withRouter(Story_Page);