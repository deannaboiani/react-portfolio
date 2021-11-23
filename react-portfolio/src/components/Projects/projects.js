import './projects.css';
import Bebop from '../images/bebop.png'
import NoteTaker from '../images/note-taker.png'
import DinnerMovie from '../images/dinner-movie.png'

function Projects() {
    return (
        <div className="projects">
            <h3>Here are a few of my projects, follow the gitHub link on the contact page to see more work.</h3>
            <div class="row g-0 m-5">
                <div class="col-md-4 p-2">
                    <div class="projects-card">
                        <a href="https://bebopmusic.herokuapp.com/">
                            <img class="profile-img" src={Bebop} alt="bebop" />
                            <h1>Bebop</h1>
                        </a>

                    </div>
                </div>
                <div class="col-md-4 p-2">
                    <div class="projects-card">
                        <a href="https://deannab-note-taker.herokuapp.com/">
                            <img class="profile-img" src={NoteTaker} alt="note taker" />
                            <h1>Note Taker</h1>
                        </a>

                    </div>
                </div>
                <div class="col-md-4 p-2">
                    <div class="projects-card">
                        <a href="https://deannaboiani.github.io/dinner-and-a-movie/">
                            <img class="profile-img" src={DinnerMovie} alt="note taker" />
                            <h1>Note Taker</h1>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Projects;