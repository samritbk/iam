import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import Header from '../components/Header';
import BiggerHeader from '../components/BiggerHeader';
import Background from '../components/Background';
import Skew from '../components/Skew';
import ContainerIndex from '../components/ContainerIndex';
import MainWhat from '../components/MainWhat';
import SkillBars from '../components/SkillBars';
import MyWork from '../components/MyWork';
import Quote from '../components/Quote';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
class Home extends React.Component{
    render(){   
        return(
        <div>
                <Header/>
                <BiggerHeader/>
                <Background/>
                <Skew/>
                <ContainerIndex>
                  <MainWhat/>
                  <SkillBars/>
                  <MyWork/>
                  <Quote/>
                  <Contact/>
                  <Footer/>
                </ContainerIndex>
        </div>
        )
    }

}

export default withRouter(Home);