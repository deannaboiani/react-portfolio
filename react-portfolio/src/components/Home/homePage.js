import "../../App.css"
import "./home.css"
import profilePic from "../images/profile-pic.jpg"

function HomePage() {
    return (
        <div className="homeContent">
            <div className="imgCard">
                <img src={profilePic} alt="profile pic"/>
            </div>
            <div className="infoCard">
                <h2>About</h2>
                <p>Hello! I am DeAnna Boiani, a full-stack web developer with several years in Business Management, including Sales and Maketing. I currently am comprehensive in the following languages:
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>MySql</li>
                        <li>MongoDB</li>
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                    You can find some of my most recent projects under the projects tab in the navigation bar up top. Although, these are the languages I currently work with, I am expanding my knowledge base into other languages as I continue creating and developing. 
                    <br />
                    I plan to use my knowledge from my career in sales and marketing to be able to develop applications for clients that are accessible and provide the service they are needing. My experience working directly with CEOs and business owners allows an inside perspective to meet client needs. Please feel free to browse my work and send any questions my way via the contact tab in the navigation bar. I look forward to working with you!
                </p>


            </div>
        </div>
    )
}
export default HomePage;