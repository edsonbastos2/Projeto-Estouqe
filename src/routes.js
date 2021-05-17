import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Product from './page/Product';
import ListProduct from './page/ListProduct';
import Header from './components/Header';


export default function Router(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Product}/>
                <Route exact path="/products" component={ListProduct}/>
            </Switch>
        </BrowserRouter>
    )
}