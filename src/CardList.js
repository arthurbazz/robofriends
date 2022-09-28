import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    
    return (
        // React.Fragment is same as div 
        <> 
           { 
            // curry brackets indicates everything in it is JavaScript.   
            //map(). loops over the robots array
            robots.map((user, i) => {
                //key hepls keep track of each index
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                    /> 
                );
            })

           } 
        </>
    );
}

export default CardList;