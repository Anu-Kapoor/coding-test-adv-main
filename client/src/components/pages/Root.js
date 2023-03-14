import { Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

function RootLayout()
{
    return(
        <>
        <Layout/>
<Outlet/>
        </>
    )
}
export default RootLayout;