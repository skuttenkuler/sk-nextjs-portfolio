
import {server} from '../config/index'
import Link from "next/link";


const Testimonials = ({testimonials}) => (
  <div className="slider">
    <Link href="#slide-1" scroll={false}>
      <a>1</a>
    </Link>
    <Link href="#slide-2" scroll={false}>
      <a>2</a>
    </Link>
    <Link href="#slide-3" scroll={false}>
      <a>3</a>
    </Link>
    <Link href="#slide-4" scroll={false}>
      <a>4</a>
    </Link>
    <Link href="#slide-5" scroll={false}>
      <a>5</a>
    </Link>

    <div className="slides">
      <div name="slide-1" id="slide-1">
        1
      </div>
      <div name="slide-2" id="slide-2">
        2
      </div>
      <div id="slide-3">3</div>
      <div id="slide-4">4</div>
      <div id="slide-5">5</div>
    </div>
  </div>
);
export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/testimonials`)
    const testimonials = await res.json();
    
    //return props object
    return{
        props: {
            testimonials
        }
    }
}
export default Testimonials;