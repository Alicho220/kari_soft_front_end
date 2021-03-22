import React from 'react'
import {Link} from 'react-router-dom';
import { ErrorDiv } from './style';

function ErrorPage() {
    return (
        <ErrorDiv>
            <h1>Page Not Found</h1>
            <Link to='/home'>
            <p style={{textDecoration:'none'}}>Return to home page</p>
            </Link>
            
        </ErrorDiv>
    )
}

export default ErrorPage
