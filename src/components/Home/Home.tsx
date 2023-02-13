
import { ReserveRow } from '../ReserveRow/ReserveRow';
import './Home.css'
import { MainComponent } from './MainComponent/MainComponent';
// import { HomeFilter } from "../HomeFilter/HomeFilter";



export const Home = () => {
    return (
        <div >
            <ReserveRow />
            <MainComponent />
        </div>

    )
};
