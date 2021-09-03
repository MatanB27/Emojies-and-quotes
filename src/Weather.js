import React, {useState, useEffect} from "react";
import WeatherCities from "./components/WeatherCities";
import WeatherTicket from './components/WeatherTicket';

const cities ={
    'Tel aviv': 293396,
    'London': 2643743,
    'Paris': 2988507,
    'Jerusalem': 281184,
    'New york': 5128581,
    'Moscow': 524901,
    'Tokyo': 1850144 
}


function Weather(){
    const [loading, setLoading] = useState(false);
    const [jsonData, setJsonData] = useState({});
    const [cityTitle, setCityTitle] = useState('');

    const fetchData = async () => {
        try{
            setLoading(true);
            const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=&appid=79eb640d1eed05dbcbf5f784f2fea112&units=metric`);
            const json = await data.json();
            setJsonData(json.list);
            setLoading(false);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData();
    },[]);
    if(loading){
        return <h1>Loading...</h1>
    }else{
    return(
        <>
        <div>
            <h1>Weather</h1>
            <hr/>
            <div className='cities'>
                {
                Object.keys(cities).map((city, index) => {
                    return(
                        <WeatherCities key={index} city={city}
                        onClick={() => setCityTitle(city)}
                        />
                    );
                })
                }
                <h2>{cityTitle}</h2>
                <div className='tickets'>
                {
                    
                }
                </div> 
            </div>
        </div>
        </>
    );
}
}

export default Weather;

// {
//     cityTitle === '' ? null
//     :<div className='tickets'>
//         {
//             jsonData.map((ticket, index) =>{
//                 return(
//                     <WeatherTicket
//                     key={index}
//                     icon={ticket.weather[0].icon}
//                     desc={ticket.weather[0].description}
//                     time={ticket.dt_txt}/>
//                 )
//             })
//         }
//     </div>
// }  