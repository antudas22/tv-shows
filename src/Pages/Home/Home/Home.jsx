import {useEffect, useState} from 'react';
import ShowCard from './ShowCard';

const Home = () => {
    
    const [shows, setShows] = useState([]);

    useEffect( () => {
        
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setShows(data)
        })

    } , [])

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5" >Welcome to TV - Shows</h2>
           <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-auto'>
                {
                    shows.map(singleShow => <ShowCard key={singleShow.show.id} show={singleShow.show} />)
                }
           </div>
        </div>
    );
};

export default Home;