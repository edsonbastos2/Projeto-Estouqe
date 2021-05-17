import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Product from './page/Product';
import ListProduct from './page/ListProduct';


export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Product}/>
                <Route exact path="/products" component={ListProduct}/>
            </Switch>
        </BrowserRouter>
    )
}