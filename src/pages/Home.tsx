import { useEffect, useState } from 'react';
import List from '../components/List';
import { getCats } from '../services/getCats';
import { Cat } from '../types/cats';

function Home() {
    return (
        App()
    );
}

interface AppState {
    cats: Array<Cat>
}

function App() {
    const [cats, setCats] = useState<AppState["cats"]>([])

    useEffect(() => {
        getCats()
            .then(cats => {
                setCats(cats['data'])
            })
    }, [])

    function refreshPage() {
        window.location.reload()
    }

    return (
        <div className="App">
            <List cats={cats}/>
            <button title={'more facts button'} onClick={refreshPage}> 10 New Facts </button>
        </div>
    );
}

export default Home;