import React from 'react';
import {Route} from 'react-router-dom';

//layout
import HomeLayout from '../Layout/Home.layout';

function HomeLayoutHOC({component: Component, ...rest}) {
    return (
            <>
              <Route 
                {...rest} component= {(props) => (
                    <HomeLayout>
                        <Component {...props} />
                    </HomeLayout>
                )}  
              />
            </>
        );
    }


export default HomeLayoutHOC;
