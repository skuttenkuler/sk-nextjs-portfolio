//fetch 
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