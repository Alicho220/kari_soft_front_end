import styled from 'styled-components'


export const FooterDiv = styled.div`
display:flex;
justify-content:center;

width:100%;

@media(max-width:300px){
    .FooterDiv{
        display:list-item;
        background-color:red;
        overflow:hidden;
    }
}


.inner-container{
    display:flex;
    justify-content:space-between;
    padding:20px;
    /* position:absolute;
bottom:0px; */

}

.right-side{
    display:flex;
    flex-direction:row;
    p{

    margin-right:40px;
    font-size:13px;
    font-weight:bold;
    color:red;
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