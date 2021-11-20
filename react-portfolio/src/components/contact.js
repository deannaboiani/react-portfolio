import '../App.css';

function Contact() {
    return (
        <div className='contactInfo'>
            <h3>Reach me through the following links</h3>
            <ul>
                <li><button><a href="mailto:deannaboiani@gmail.com">Email</a></button></li>
                <li><a href="https://www.linkedin.com/in/deannaboiani/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/deannaboiani" target="_blank">GitHub</a></li>
            </ul>

        </div>
    )
}

export default Contact;