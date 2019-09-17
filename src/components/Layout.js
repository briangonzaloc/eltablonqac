import React from 'react';
import ContainerNavbar from './ContainerNavbar';

function Layout(props){
    return(
        <React.Fragment>
            <ContainerNavbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;