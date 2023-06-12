import React from 'react';

import {Container} from '../App.styled';
import {Greeting, MainContainer, MainWrapper, Photo} from './Main.styled';

export const Main = () => {
    return (
        <MainWrapper>
            <Container>
                <MainContainer>
                    <Greeting>
                        <span>Hi</span>
                        <h1 id="Home">I am Dimon</h1>
                        <p>Frontend Developer</p>
                    </Greeting>
                    <Photo></Photo>
                </MainContainer>
            </Container>
        </MainWrapper>
    );
};

