//make the program understand JSX
import React from 'react';
            // destructuring the props inside the function
const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 ma3 grow bw2 shadow-5'>
                                    {/* link in cury brackets to make it an expression */}
            <img alt='robots' src={`https://robohash.org/${id}`}/>
            <div>
                {/* props is a javascript expression, needs to be in cury brackets */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;