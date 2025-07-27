import "../Style/ViewDisplay.css"

const ViewDisplay=({status})=>{
    return(
        <>
            <div id="ViewDisplayMainDiv" style={{display:status?'block':'none'}}>
                <div id="ViewDisplayInnerDiv">
                    <div className="ViewClass">
                        <div className="MView">M</div>
                        <div className="ViewText">Mohd Saleem <span>Buyer, Sales</span></div>
                    </div>

                    <div className="ViewClass">
                        <div className="MView">M</div>
                        <div className="ViewText">Mohd Saleem <span>Adam, Merchandiser</span></div>
                    </div>

                    <div className="ViewClass">
                        <div className="MView">M</div>
                        <div className="ViewText">Mohd Saleem <span>Adam, Admin</span></div>
                    </div>

                    <div className="ViewClass">
                        <div className="MView">M</div>
                        <div className="ViewText">Mohd Saleem <span>Buyer, CEO</span></div>
                    </div>

                    <div className="ViewClass">
                        <div className="MView">M</div>
                        <div className="ViewText">Mohd Saleem <span>Buyer, Design Head</span></div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}
export default ViewDisplay