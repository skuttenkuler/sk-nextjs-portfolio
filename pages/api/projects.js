import {projects} from '../../projectdata'

export default function handler(req, res) {
    res.status(200).json(projects)
}