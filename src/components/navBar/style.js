import styled from "styled-components";

export const NavBarDiv = styled.div`
display:flex;
justify-content:center; 

img{
    width:180px;
}

.container{
    width:1250px;
    display:flex;
    justify-content:space-between;
}
.toggler{
    background-color:transparent;
    border:none;
}

.inner-container{
    display:flex;
}

}
.navbar {

}


.navbar .nav-link {
 
}

.navbar .nav-link:hover,
.navbar .nav-link:focus {
    color: #fff;
    text-decoration: none;
}

.navbar .navbar-brand {
    /* color: #fff; */
}



/* Change navbar styling on small viewports */
@media (max-width: 991.98px) {
    .navbar {
        display:flex;
        flex-direction:row;
    }

    .navbar .navbar-brand, .navbar .nav-link {
        color: #555;
    }
    
}

@media (max-width: 400px) {
    .navbar {
        display:flex;
        flex-direction:row;

        button{
            display:none;
        }

    }

    .navbar .navbar-brand, .navbar .nav-link {
        color: #555;
    }
    .container{
        img{
            width:100px;
        }
    }





`;
