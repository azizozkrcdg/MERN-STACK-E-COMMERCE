import { useState } from "react";
import Footer from "../components/Layout/Layouts/Footer/Footer"
import Header from "../components/Layout/Layouts/Header/Header"
import PropTypes from "prop-types";
import Search from "../components/Layout/Modals/Search/Search";
import Dialog from "../components/Layout/Modals/Dialog/Dialog";

const MainLayout = ({children}) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(true);

  return (
    <div className="main-layout">
        <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow}/>
        <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
        <Header setIsSearchShow={setIsSearchShow} />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout

MainLayout.propTypes = {
    children : PropTypes.node
}
