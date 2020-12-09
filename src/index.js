import React, {useContext, createContext, useEffect} from 'react';
import {BrowserRouter as ReactRouter, withRouter, Switch, Route} from 'react-router-dom'
import queryString from 'query-string'
import {createBrowserHistory} from 'history'

//create instantiate a history object to hold the historical routes for this project
const history = createBrowserHistory();

//create a context object to hold the routing props for all components
const routerContext = createContext();

//pass all the props from main react router component to the router context provider
export const Router = ({children}) => {
    return(
        <ReactRouter history={history}>
            <RouterContextProvider>
                {children}
            </RouterContextProvider>
        </ReactRouter>
    )
}

//using the withRouter HOC component, collect all the router props and store them in 
//the context provider root component to pass as a context to any child that uses the context
export const RouterContextProvider = withRouter(({children, ...routerProps}) =>  {
    return(
        <routerContext.Provider history={history} value={routerProps}>
            {children}
        </routerContext.Provider>
    )
});

//an api to access the router props within any component
//it provides a simple way to call API present in the router context without a complex API
export const useRouter = () => {
    //get the props from the context
    const routerProps = useContext(routerContext);

    //if there are no router props, we are not within ReactRouter
    if(!routerProps){
        throw new Error("useRouter cannot be used outside a Router component");
    }

    //return the simplified API for router props
    return {
        push: routerProps.history.push,
        replace: routerProps.history.replace,
        pathname: routerProps.location.pathname,

        query: {
            ...queryString.parse(routerProps.location.search),
            ...routerProps.match.params
        },
        ...routerProps
    }

}

//scroll to top everytime the props changes, 
//this can be applied depending on the nature of the project...
//... very efficient for dashboard based application where it is a good user experience to scroll a user to the top
export const ScrollTop = (props) => {
    useEffect(() => {
        window.scroll(0,0);
    },[routerContext])
    return null;
}

export {Route, Link, NavLink, Switch, withRouter} from 'react-router-dom';

// A component that takes a config and renders a complete route with the setup data 
// this component is typed with prop types 
export const RenderRoutes = ({routes}) => {
    return (
        <Router>
            <Switch>
                {
                    routes.map(route => (
                        <Route exact={route.exact} path={route.pathname} component={route.component} key={route.key}/>
                    ))
                }
            </Switch>
        </Router>
    )
}

