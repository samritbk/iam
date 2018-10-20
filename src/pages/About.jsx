import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';
import Container from '../components/Container';
import MainWhat from '../components/MainWhat';
import SkillBars from '../components/SkillBars';
import MyWork from '../components/MyWork';
import Quote from '../components/Quote';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';
import {about} from '../asset/strings';

class About extends React.Component{
    render(){   
        return(
        <div>
                <Header/>
                <Background/>
                <Container>    
                <MainWhat>
                    <div dangerouslySetInnerHTML={{__html:about.aboutme}}>
                    </div>
                </MainWhat>
                  <Quote/>
                  <Contact/>
                  <Footer/>
                </Container>                  
        </div>
        )
    }
}

export default About;