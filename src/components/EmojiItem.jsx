import React from 'react';

function EmojiItem(props) {
    return (
            <div className='emoji-item'>
                <h1>{props.icon}</h1>
                <h2>{props.desc}</h2>
            </div>
    );
}

export default EmojiItem;