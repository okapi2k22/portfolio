import { Link } from 'react-router-dom';
import './CaseStudyCardList.css';

import cleatwizThumbnail from "../../assets/images/cleatwiz-thumbnail.png";
import lahiyaThumbnail from "../../assets/images/lahiya-thumbnail.png";
import cafeVendomeThumbnail from "../../assets/images/cafe-vendome-thumbnail.png";
import deallThumbnail from "../../assets/images/deall-thumbnail.png";

type CaseStudy = {
    url: string;
    name: string;
    img: string;
    description: string;
}

export function createStudyCardItem(caseStudy: CaseStudy){
    return <li><CaseStudyCard {...caseStudy} /></li>;
}
function CaseStudyCard({url, name, img, description}: CaseStudy){
    return (
        <Link to={`work/${url}`} className='CaseStudyCardContainer'>
            <div className='CaseStudyCard'>
                <img src={img} alt="" />
                <div className='CaseStudyCard__content'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <br />
                    <a href="">Read Case Study</a>
                </div>
            </div>
        </Link>
    )
}

export default function CaseStudyCardList(){
    const caseStudies = [
        {
            url: "cleatwiz",
            name: "Cleatwiz",
            img: cleatwizThumbnail,
            description: "A soccer footwear recommender website"
        },
        {
            url: "lahiya",
            name: "Lahiya",
            img: lahiyaThumbnail,
            description: "A pharmacy locator app for Nigeriens"
        }, 
        {
            url: "cafe-vendome",
            name: "Cafe Vendome",
            img: cafeVendomeThumbnail,
            description: "Redesigning a local French cafe website"
        }, 
        {
            url: "deall",
            name: "Deall",
            img: deallThumbnail,
            description: "Iterative design of a job application site"
        }
    ];
    return(
        <ul className='CaseStudyCardList'>
            {caseStudies.map(createStudyCardItem)}
        </ul>
    );
}