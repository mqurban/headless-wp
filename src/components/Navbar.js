import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [siteTitle, setSiteTitle] = useState("Loading...");
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // fetch site title 
        fetch("https://patpongmarket.com/wp-json/wp/v2/settings")
            .then((res) => res.json())
            .then((data) => setSiteTitle(data.title))
            .catch((err) => console.error("Error fetching site Title: ", err));

        // fetch menu items 
        fetch("https://patpongmarket.com/wp-json/wp/v2/pages")
            .then((res) => res.json())
            .then((data) => setMenuItems(data))
            .catch((err) => console.error("Error fetching menu items: ", err));
    }, []);

    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">{siteTitle}</h1>
                <div className="flex items-center">
                    <Link to="/" className="mr-4">Home</Link>
                    {menuItems.map((page) => (
                        <Link key={page.id} to={`/${page.slug}`} className="mr-4">
                            {page.title.rendered}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;