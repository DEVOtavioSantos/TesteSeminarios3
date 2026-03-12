import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <h1>Teste</h1>
    },    
    {
        path: "/sobre",
        element: <h1>Hello World</h1>
    },
])

export default Routes