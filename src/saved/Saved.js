import React, { useState, useEffect } from 'react';
import { ResultContainer } from '../homepage/results/ResultStyles';
import Results from '../homepage/results/Results';
import SavedResults from './SavedResults'
import Navbar from '../navbar/Navbar'
import styled from 'styled-components';

const Background = styled.div`
    background-color: #211e1e;
    padding: 0rem;
    margin: 0;
    min-height: 100vh;
`
const Savedpage = ({ user, setUser, userLogout }) => {

    const [savedResults, setSavedResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                let savedResults = await fetch('/displaySavedCocktails')
                let jsonSavedResults = await savedResults.json();
                if (jsonSavedResults) {
                    setSavedResults(jsonSavedResults);
                }
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        };
        fetchResults();
    }, []);

    
    return(
        <Background>
            <Navbar user={user} setUser={setUser} userLogout={userLogout} />
            <SavedResults results={savedResults} setSavedResults={setSavedResults}/>
        </Background>
    )
}

export default Savedpage;