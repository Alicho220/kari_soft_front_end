import styled from 'styled-components'


export const FooterDiv = styled.div`
display:flex;
justify-content:center;
position:absolute;
bottom: 0;
width:100%;  

@media(max-width:360px){
        display:none;
        /* background-color:red; */
        overflow:hidden;
    
}


.inner-container{
    display:flex;
    justify-content:space-between;
    padding:20px;
}

.right-side{
    display:flex;
    flex-direction:row;
    p{
    margin-right:40px;
    font-size:13px;
    font-weight:bold;
    }
}

.icons{
    svg{
        font-size:25px;
        margin-right:30px;
        /* color:red; */
    }
}


`