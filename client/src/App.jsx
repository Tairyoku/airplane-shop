import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreatePlanePage } from './pages/create-plane-page/create-plane-page';
import { Homepage } from './pages/homePage';
import { OrderPage } from './pages/orderPage';
import { PlanePage } from './pages/planePage';
import { paths } from './paths'


function App() {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path={ paths.home } element={ <Homepage /> }/>  
        <Route path={ `${paths.plane}/:id` } element={ <PlanePage /> }/>  
        <Route path={ paths.createPlane } element={ <CreatePlanePage /> }/>  
        <Route path={ paths.order } element={ <OrderPage /> }/>  
        </Routes>   
        </BrowserRouter>
    );
}

export default App;