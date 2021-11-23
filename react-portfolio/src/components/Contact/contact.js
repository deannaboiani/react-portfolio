import '../../App.css';
import './contact.css'

function Contact() {
    return (
        <div className='contactInfo'>
            <h3>Please reach me through the following links</h3>
            
                <button className="button"><a href="mailto:deannaboiani@gmail.com">Email</a></button>
                <button className="button"><a href="https://www.linkedin.com/in/deannaboiani/" target="_blank">LinkedIn</a></button>
                <button className="button"><a href="https://github.com/deannaboiani" target="_blank">GitHub</a></button>
            

        </div>
    )
}

export default Contact;