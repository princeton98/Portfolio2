import Picture from "../Image/profilePic.png"
import "./Home.scss";
import ApocalypseTwins from "../Image/apocalypse-twins.png";

const Home = () => {
    return (
        <div className="portfolio">
            <div className="about-me">
                <div className="about-me-text">
                <div className="name">Hi! My name is Princeton Arulnesan</div>
                <div className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor eu consectetur mattis. Integer iaculis sit amet turpis nec suscipit. Sed sit amet ultricies purus. Maecenas efficitur laoreet lacus sit amet commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quis turpis sit amet ipsum egestas tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tempus dictum. Curabitur molestie sapien nec vulputate varius. Integer mollis egestas ex, quis dictum nibh rutrum non. Praesent quis lectus non sem accumsan egestas.
                </div>
                </div>
                <img className="profile-picture" src={Picture} />
            </div>

            <div className="featured-project">
                <div className="featured-title">
                    Featured Project
                </div>
                <div className="featured-project-info">
                    <img className="project-picture" src={ApocalypseTwins}/>
                    <div className="project-text-title">
                    <div className="name">Title of project</div>
                    <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor eu consectetur mattis. Integer iaculis sit amet turpis nec suscipit. Sed sit amet ultricies purus. Maecenas efficitur laoreet lacus sit amet commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quis turpis sit amet ipsum egestas tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tempus dictum. Curabitur molestie sapien nec vulputate varius. Integer mollis egestas ex, quis dictum nibh rutrum non. Praesent quis lectus non sem accumsan egestas.</div>
                    <div className="paragraph"> <a href="">View Project Details </a> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;