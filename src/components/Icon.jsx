import React from 'react';
import { IconContext } from 'react-icons';


export default ({ icon, styles }) => {

    return (
        <IconContext.Provider value={{ className: styles }} >
           {icon}

        </IconContext.Provider>
    )
}