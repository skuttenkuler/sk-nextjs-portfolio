import {career} from '../data/data'
import {testimonials} from '../data/testimonials'
import {PrevButton, WorkList, Testimonials} from '../components'

const Career = ({career, testimonials}) => {
    console.log([career,testimonials])
    return(
        <>
        <PrevButton prev="" page="Home."/>
        <WorkList page="career" data={career}/>
        <Testimonials testimonials={testimonials} />
        </>
        )
};


export async function getStaticProps() {
    return { props: { career, testimonials } }
  }

export default Career;