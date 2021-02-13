import {projects} from '../../../data/projectdata'

export default function handler(req, res) {
    res.status(200).json(projects)
}