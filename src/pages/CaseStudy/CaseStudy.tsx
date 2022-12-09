import Markdown from 'markdown-to-jsx';
import './CaseStudy.css';
import Image from '../../components/Image/Image';
import { useLoaderData } from 'react-router-dom';



export default function CaseStudy(){
    const caseStudyContent = useLoaderData();
    return(
        <article className='CaseStudy'>
            {caseStudyContent ? <Markdown
                options={{
                    overrides: {
                        Image: {
                            component: Image,
                        }
                    }
                }}
            >{caseStudyContent as string}</Markdown>: <p>Not loaded</p>}
        </article>
    );
}