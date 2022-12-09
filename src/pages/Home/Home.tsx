import CaseStudyCardList from "../../components/CaseStudyCardList/CaseStudyCardList";

import './Home.css';

export default function Home(){
    return(
        <div className='Home'>
            <section>
                <h3>I'm passionate about making a change. I also happen to make <span className="emphasis">beautiful UIs.</span></h3>
            </section>
            <section>
                <h3>My Work</h3>
                <CaseStudyCardList />
            </section>
        </div>
    )
}