import React from 'react';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects/Projects';
import { HireMe } from './components/HireMe/HireMe';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <Main />
                <Skills />
                <Projects />
                <HireMe />
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}

export default App;
