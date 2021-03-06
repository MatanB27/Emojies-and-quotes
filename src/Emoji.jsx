import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import EmojiItem from './components/EmojiItem';
import {Link} from 'react-router-dom';

function Emojies(){

    const API_KEY = '?access_key=39a1afc2f80beac28b7e18959dfee4d36ed602bb';
    const BASE = 'https://emoji-api.com/emojis';

    const [jsonData, setJsonData] = useState([]); // json data here
    const [loading, setLoading] = useState(false);
    const [emojies, setEmojies] = useState([]);
    const [title, setTitle] = useState('');
    
    const menuItems = [...new Set(jsonData.map((item) =>{
        return (item.group); // all groups of emojies
      }))];

    const fetchData = async () => {
        try{
            setLoading(true);
            const data = await fetch(BASE + API_KEY);
            const json = await data.json();
            setJsonData(json);
            setLoading(false);
        }catch(e){
            console.log(e);
        }
    }

    const getGroup = (event) => {
        var items = [];
        jsonData.map((item) => {
            if(item.group === event.target.textContent.replaceAll(' ','-')){
                items.push(item);
            }
        });
        setTitle(event.target.textContent);
        setEmojies(items);

    }

    useEffect(() => {
        fetchData();
      }, []) //Only run once

    if(loading){
        return <main><Loading/></main>
    }else{
        return(
            <div>
                <h1>Emojies</h1>
                <hr/>
                <br/><br/>
                <div className="dropdown drop-btn">
                    {
                        title === '' ? <span>Find your emoji here</span> :
                        <span>{title}</span>
                     }
                    <div className="dropdown-content">
                        {
                            menuItems.map((item, index) => {
                                return(
                                    <div key={index} onClick={getGroup}>
                                        <p key={index} value={item} className='menu-items'>
                                            {item.replaceAll('-',' ')}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className='grid-container'>
                        { // slug will be our ID - our explanation
                            emojies.map((emoji) => {
                                return(
                                    <Link to={`/emojies/${emoji.slug}`}>
                                        <EmojiItem
                                            key={emoji.slug}
                                            icon={emoji.character}
                                            desc={emoji.unicodeName}
                                        />
                                    </Link>
                                );
                            })
                        }
                    </div> 
            </div>
        );
    }
}

export default Emojies;