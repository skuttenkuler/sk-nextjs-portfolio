import Link from "next/link";
import Image from "next/image"
const Testimonials = ({testimonials}) => {
return(
  <div className="slider">
            <div className="slides">
                {testimonials.map((slide) => (
                <div name={"slide-" + slide.id} id={"slide-" + slide.id}>
                    <Image
                        id="slide-image"
                        src={slide.thumbnail}
                        alt="{Picture of the author}"
                        width={150}
                        height={150}
                    />
                    <div className="slideInfo">
                    
                    <br/>
                        <h5 id="name">{slide.name}</h5>
                        <p id="role">{slide.role}</p>
                        <p id="body">{slide.body}</p>
                    </div>
                </div>
                ))}
            </div>
                <Link href="#slide-1" scroll={false}>
                <a></a>
                </Link>
                <Link href="#slide-2" scroll={false}>
                <a></a>
                </Link>
            </div>
      
    );
}
export default Testimonials;