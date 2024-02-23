import { SERVER, LIVE_URL } from "../../environment";
import { useQuery } from "react-query";
import Photo from "../../types/Photo";

function SiteMap() {

    const fetchAllPhotos = async () => {
        return await (
            await fetch(
                `${SERVER}/api/portfolio/get/photos`
            )
        ).json();
    };
    type Photos = {
        results: Photo[];
    };

    const { data, error, status } = useQuery<Photos, Error>(
        "photos",
        fetchAllPhotos
    );
    const photoList: Photo[] | [] = data?.results || [{
        id: 0,
        title: "No Photos Found",
        description: "There may be a connection issue. Please refresh or try later",
        detailedDescription: '',
        camera: '',
        lens: '',
        iso: 0,
        aperture: '',
        thumbnail: '',
        hdSource: '',
        source: '',
        link: '',
        date: '',
        theme: '',
        exposureTime: 0,
    }];

    const dynamicSiteMap: string = photoList.map((photo)=>{return `
    <url>
        <loc>https://www.astroamateur.space/#/photos/id/${photo.id}</loc>
    </url>
    `}).join('')
    const siteMap: string = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.astroamateur.space/</loc>
    </url>
    <url>
        <loc>https://www.astroamateur.space/#/photos</loc>
    </url>
        ${dynamicSiteMap}
    </urlset>`

    const copySitemap = () => {
        navigator.clipboard.writeText(siteMap);
        window.alert("Sitemap copied to clipboard");
    }

    return(
    <>
    <div id="sitemap-container">
        {siteMap}
    </div>
    <button onClick={copySitemap}>Copy Sitemap</button>
    </>)
}



export default SiteMap;