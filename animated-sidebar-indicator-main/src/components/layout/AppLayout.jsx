import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import SearchBox from "../searchbox/SearchBox"
import Cards from "../cards/Cards";
import Datatable from "../Datatable/Datatable";

const AppLayout = () => {
    return <div style={{
        padding: '10px 0px 0px 350px'
    }}>
        <Sidebar />
        <SearchBox />
        <div>
            <div>
                <h3> Welcome Shrikant</h3>
                <p>Uplode Your audio and vedio to convert to text</p>
            </div>
            <div>
                <button className="Primary"> Transcribe File</button>
            </div>
            
            
        </div>
        <Cards />
        <Datatable />
        <Outlet />
    </div>;
};

export default AppLayout;
