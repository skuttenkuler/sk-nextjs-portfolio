import {testimonials} from '../../data/testimonials'

export default function handler(req, res) {
    res.status(200).json(testimonials)
}