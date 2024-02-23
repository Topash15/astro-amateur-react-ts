import PhotoEditor from "../../components/PhotoEditor";
import SiteMap from "../../components/SitemapGenerator";

function Admin(){
    return(
        <>
            <h2>Admin</h2>

            <PhotoEditor />
            <SiteMap/>
        </>
    )
}

export default Admin;