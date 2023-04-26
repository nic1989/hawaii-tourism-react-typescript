import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getHighlightData } from '../services/httpservices';
import { useDispatch, useSelector } from 'react-redux';
import { setHighlights } from '../redux/actions/HighlightActions';
import { HighLight } from '../models/highlight';
import { slug } from '../utils/utils';


const Header: FC<{}> = () => {
    const dispatch = useDispatch();
    const highlightDataList: any = useSelector(state => state);
    useEffect(() => {
        if (highlightDataList && highlightDataList.highLightsList.length === 0) {
            (async () => {
                const response = await getHighlightData();
                dispatch(setHighlights(response));
            })();
        }
    }, []);
    const toggleNavbar = () => {
        const navbar = document.getElementById("alohaNavbar")!
        if (navbar.style.display === 'block') {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "block";
        }
    }

    const hideNavbar = () => {
        const navbar = document.getElementById("alohaNavbar")!
        navbar.style.display = "none";
    }

    const renderMenuList = highlightDataList.highLightsList.hasOwnProperty('highlights') && highlightDataList.highLightsList.highlights.map((item: HighLight, index: number) => {
        return (
            <li onClick={hideNavbar} className="nav-item" key={index}>
                <Link className="nav-link" aria-current="page" to={`/activity/${slug(item.title)}`}>{item.title}</Link>
            </li>
        )
    })
    
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Aloha</Link>
                    <button onClick={toggleNavbar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#alohaNavbar" aria-controls="alohaNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="alohaNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li onClick={hideNavbar} className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {renderMenuList}
                        </ul>
                        <div className="d-flex" role="search">
                            <button className="btn btn-bg">Book a trip</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;