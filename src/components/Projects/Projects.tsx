import React from 'react';

import {Project} from './Project/Project';
import {ProjectListElement, ProjectsList, ProjectsTitle, ProjectsWrapper} from './Projects.styled';
import {Container} from '../App.styled';

export const Projects = () => {
    const projectDescription = `Description_1`
    const projectImage = `Description_2`

    return (
        <ProjectsWrapper>
            <Container>
                <ProjectsTitle id="Portfolio">Projects</ProjectsTitle>
                <ProjectsList>
                    <ProjectListElement>
                        <Project title="Project name" description={projectDescription} image={projectImage}/>
                    </ProjectListElement>
                    <ProjectListElement>
                        <Project title="Project name" description={projectDescription} image={projectImage}/>
                    </ProjectListElement>
                </ProjectsList>
            </Container>
        </ProjectsWrapper>
    );
};

