import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:"register",
                Component:Register
            },
            {
              path:"myApplications",
              element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path:"signin",
                Component:SignIn
            },
            {
                path:'addJob',
                element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:'mypostedjobs',
                element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                 path:'/applications/:job_id',
                 element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
                 loader: ({params}) => fetch(`https://career-code-server-mocha.vercel.app/applications/job/${params.job_id}`)
                 
            },
            {
                path:'/jobs/:id',
                Component:JobDetails,
                loader: ({params}) => fetch(`https://career-code-server-mocha.vercel.app/jobs/${params.id}`)
            },
            {
                path:'jobapply/:id',
                element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            }
        ]
    }
])