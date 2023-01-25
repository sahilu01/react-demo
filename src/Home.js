import React,{ useState, useEffect } from 'react';
import Header from './Header';
import ProductList from "./ProductList";
import { Box } from '@material-ui/core';
import "./home.css"



function Home() {


    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);



    return (
        <div>
            <Header/>
            <Box mt={150}>
                <ProductList />
            </Box>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>);

}



export default Home;
