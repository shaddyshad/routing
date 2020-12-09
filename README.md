## React routing
This library contains a few API's that provides routing capabilities for react apps that are multi pages   

It provides a component that can be configured with all routes and their components and handles the details of rendering 
the necessary routes and setting up the underlying mechanism of routing in react apps.   

It also provides alternative components for enhancement or configurations of the routing process e.g
An lower level component abstraction of routing that includes:
 - A context component that holds routing data or props and passes it down to its children, the component is wrapped with react-router-dom's withouter
    HOC that passess down router props from react router library. The context component is wrapped in the router component that contains the main history object and other necessary data structures from react-router-dom
 - An API to abstract the context and interactions with react-router. useRouter provides a uniform API with data from react router and methods to interact with it
 - A ScrollTop component that scrolls the page to the top when the props change. Useful for pages that don't need to remember the scroll prosition when the route changes