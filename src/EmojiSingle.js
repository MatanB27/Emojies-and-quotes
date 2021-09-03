import React, {useState, useEffect} from 'react';
import './App.css';
import EmojiItem from './components/EmojiItem';
import {Link} from 'react-router-dom';

function EmojiSingle({match}){

    const [emoji, setEmoji] = useState({});
    const [loading, setLoading] = useState(false);
    const [variants, setVariants] = useState([]);

    // If variants are undefined - doesn't exists
    const fetchItem = async() => {
        try{
            setLoading(true);
            const data = await fetch(`https://emoji-api.com/emojis/${match.params.slug}?access_key=39a1afc2f80beac28b7e18959dfee4d36ed602bb`)
            const json = await data.json();
            setVariants(json[0].variants);
            console.log(variants);
            setEmoji(json[0]);
            setLoading(false);
            
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchItem();
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }else{
        if(typeof(variants) === 'undefined'){
            return(
                <div>
                    <EmojiItem
                            key={emoji.slug}
                            icon={emoji.character}
                            desc={emoji.slug.replaceAll('-',' ')}
                        />
                </div>
            );
        }else{
            return(
                <div>
                    <EmojiItem
                            key={emoji.slug}
                            icon={emoji.character}
                            desc={emoji.slug}
                        />        
                    <br/>
                    {
                        variants.map((variant) => {
                            return(
                                <EmojiItem
                                    key={variant.slug}
                                    icon={variant.character}
                                    desc={variant.slug.replaceAll('-',' ')}
                                />
                            );
                        })
                    }       
                 </div>
            );
        }
    }
}

export default EmojiSingle;

