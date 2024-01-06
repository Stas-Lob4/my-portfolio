import './App.css';
import {Header} from "./layout/header/Header";
import {Hero} from "./layout/sections/main/Hero";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {CvSection} from "./layout/sections/cvsection/CvSection";
import styled from "styled-components";
import {Theme} from "./styled/Theme";
import React from "react";




function App() {
    return (
            <AppStyled>
                <AppContentStyled>
                        <Header/>
                        <Hero/>
                        <CvSection/>
                        <Skills/>
                        <Projects/>
                        <Contacts/>
                        <Footer/>
                </AppContentStyled>
            </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colors.darkBg};
  color: ${Theme.colors.fontDark};
  width: 100%;
  height: 100%;
`

const AppContentStyled = styled.div`
  width: 100%;
  height: 100%;
`