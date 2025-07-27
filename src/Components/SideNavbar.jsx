import "../Style/SideNav.css"

const SideNavbar=({activeCheck})=>{
    return(
        <>  
        
            <div id={activeCheck ? "SideNavMainDivActive":"SideNavMainDiv"}>
                <div id="SideLogoDiv">
                    <div id="SideLogoInnerDiv">
                        <img src="/logo.png" alt="" />
                    </div>
                    
                </div>
                <hr style={{marginBottom:"0px",marginTop:"12px"}} />
                <div id="sideDivMenu">
                    <div className="sideMenuDIV">
                        <div>
                            <img src="/home.png" className="sideDivMenuImg" alt="" />Dashboard
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/task-square.png" className="sideDivMenuImg" alt="" />Tasks
                        </div>
                    </div>

                    <div className="sideMenuDIVActive">
                        <div>
                            <img src="/icons/buyerMeeting.png"  className="sideDivMenuImg" alt=""  />Buyer Meeting
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/QuickCostng.png" className="sideDivMenuImg" alt="" />Quick Costing
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/QuickCostng.png" className="sideDivMenuImg" alt="" />Pre Order Costing
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/StyleLibrary.png" className="sideDivMenuImg" alt="" />Style Library
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/Requisition.png" className="sideDivMenuImg" alt="" />Requisitions
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/BuyerPurchase.png" className="sideDivMenuImg" alt="" />Buyer Purchase
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/Inventory.png" className="sideDivMenuImg" alt="" />Inventory
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/SampleDevelopment.png" className="sideDivMenuImg" alt="" />Sample Development
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/Production.png" className="sideDivMenuImg" alt="" />Production
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/MasterAdmin.png" className="sideDivMenuImg" alt="" />Master Admin
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/User.png" className="sideDivMenuImg" alt="" />Users
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/Supplier.png" className="sideDivMenuImg" alt="" />Suppliers
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/Showroom.png" className="sideDivMenuImg" alt="" />Showroom
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/Shipment.png" className="sideDivMenuImg" alt="" />Shipment
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/KPII.png" className="sideDivMenuImg" alt="" />KPI's
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/EInvoice.png" className="sideDivMenuImg" alt="" />E-Invoice / E-Way Bill
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/Reports.png" className="sideDivMenuImg" alt="" />Reports
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/MasterData.png" className="sideDivMenuImg" alt="" />Master Data
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/icons/Settings.png" className="sideDivMenuImg" alt="" />Settings
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default SideNavbar