import '../../App.css'
import './resume.css'
import ResumePDF from '../images/resume.png'

function Resume() {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <div>
                <img src={ResumePDF} alt="resume" />
            </div>
        </div>
    )
}

export default Resume;