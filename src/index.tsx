import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

ReactDOM.render(
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route
                    path="*"
                    element={
                        <main>
                            <p>404 - The route does not exist!</p>
                        </main>
                    }
                ></Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
