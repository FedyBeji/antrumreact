import React from "react";
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContextProvider} from "./context/userContext";
import {PlayerContextProvider} from "./context/playerContext";
import {ShoppingCartContextProvider} from "./context/shoppingCartContext";

import './styles/index.css';
import Home from "./pages/Home";
import Beats from "./pages/Beats";
import Studio from "./pages/Studio";
import App from './components/App';
import Record from "./pages/Record";
import MixMaster from "./pages/MixMaster";
import Coaching from "./pages/Coaching";
import Visuels from "./pages/Visuels";
import About from "./pages/About";
import Panier from "./pages/Panier";
import UserAccount from "./pages/UserAccount";
import News from "./pages/News";
import LegalsMentions from "./pages/LegalsMentions";
import ConfPolitics from "./pages/ConfPolitics";
import ReturnsPolitics from "./pages/ReturnsPolitics";
import Store from "./pages/Store";
import Admin from "./pages/admin/Admin";
import WebSiteManagement from "./pages/admin/WebSiteManagement";
import UsersManagement from "./pages/admin/UsersManagement";
import BeatsManagement from "./pages/admin/BeatsManagement";
import ProductsManagement from "./pages/admin/ProductsManagement";
import ArticlesManagement from "./pages/admin/ArticlesManagement";
import CommentsManagement from "./pages/admin/CommentsManagement";
import ReportsManagement from "./pages/admin/ReportsManagement";
import SellsManagement from "./pages/admin/SellsManagement";
import Order from "./pages/account/Order";
import Details from "./pages/account/Details";
import Download from "./pages/account/Download";
import BeatMakersManagement from "./pages/admin/BeatMakersManagement";

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <ShoppingCartContextProvider>
                    <PlayerContextProvider>
                        <Routes>
                            <Route path="/" element={<App/>}>
                                <Route path="home" element={<Home/>}/>
                                <Route path="beats" element={<Beats/>}/>
                                <Route path="studio" element={<Studio/>}/>
                                <Route path="store" element={<Store/>}/>
                                <Route path="studio/record" element={<Record/>}/>
                                <Route path="studio/coaching" element={<Coaching/>}/>
                                <Route path="studio/mixmaster" element={<MixMaster/>}/>
                                <Route path="visuels" element={<Visuels/>}/>
                                <Route path="about" element={<About/>}/>
                                <Route path="panier" element={<Panier/>}/>
                                <Route path="account" element={<UserAccount/>}>
                                    <Route path="order" element={<Order/>}/>
                                    <Route path="download" element={<Download/>}/>
                                    <Route path="details" element={<Details/>}/>
                                    <Route
                                        path="*"
                                        element={
                                            <main style={{padding: "1rem"}}>
                                                <p>There's nothing here!</p>
                                            </main>
                                        }
                                    />
                                </Route>
                                <Route path="news" element={<News/>}/>
                                <Route path="legals-mentions" element={<LegalsMentions/>}/>
                                <Route path="conf-politics" element={<ConfPolitics/>}/>
                                <Route path="returns-politics" element={<ReturnsPolitics/>}/>
                                <Route path="*"  element={ <main style={{padding: "1rem"}}>
                                            <p>There's nothing here!</p>
                                        </main> }
                                />
                            </Route>
                            <Route path="admin" element={<Admin/>}>
                                <Route path="home" element={<WebSiteManagement/>}/>
                                <Route path="users" element={<UsersManagement/>}/>
                                <Route path="beats" element={<BeatsManagement/>}/>
                                <Route path="beatmakers" element={<BeatMakersManagement/>}/>
                                <Route path="goodies" element={<ProductsManagement/>}/>
                                <Route path="articles" element={<ArticlesManagement/>}/>
                                <Route path="comments" element={<CommentsManagement/>}/>
                                <Route path="reports" element={<ReportsManagement/>}/>
                                <Route path="sells" element={<SellsManagement/>}/>
                                <Route
                                    path="*"
                                    element={
                                        <main style={{padding: "1rem"}}>
                                            <p>There's nothing here admmin!</p>
                                        </main>
                                    }
                                />
                            </Route>
                        </Routes>
                    </PlayerContextProvider>
                </ShoppingCartContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);