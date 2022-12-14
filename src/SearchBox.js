import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 bg-lightest-blue ba b--green br3' 
                type='search' 
                placeholder='Search for Robots!' 
                onChange={searchChange}

            />
        </div>
        
    );
}

export default SearchBox;