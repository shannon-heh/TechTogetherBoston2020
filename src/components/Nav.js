import Fire from './img/fire-logo.svg';

export const NavBar = () => {
    return(
        <div id = "main-menu">
            <div id = "logo">
                <img src={Fire} className="fire-logo" alt="fire logo"/>
            </div>
            <div id="nav">
                <ul>
                    <li><a href = "#overlay">Home</a></li>
                    <li><a href = "#history">History</a></li>
                    <li><a href = "#prediction">Prediction</a></li>
                    <li><a href = "#prevention">Prevention</a></li>
                    <li><a href = "#community-title">Community</a></li>
                    <li><a href = "#aboutus-title">About</a></li>
                </ul> 
            </div>
        </div>
    )
}