import './Executives.css'
import { Link } from 'react-router-dom'
import ExecutivesData from '../../assets/data/executives.json'

type ExecutivesType = {
    img: string,
    name: string,
    post: string,
    department: string,
    batch: string,
    slug: string
}

const SinglePerson = ({exec}:{exec: ExecutivesType}) => {   
  return (
    <Link className="person executive-card-link" to={`/${exec.slug}`}>
        <img src={`/executives/${exec.img}`} alt={exec.name}/>
        <div className="shoulder">
            <p className="name">{exec.name}</p>
            <p className="position">{exec.post}</p>
            <hr className="hr-two" />
            <p>Bachelors in {exec.department}</p>
            <p>Pulchowk Campus</p>
            <p>Batch {exec.batch}</p>
            <span className="view-profile">View profile</span>
        </div>
    </Link>
  );
};

export default function Executives() {
    return (
        <div className="content3" data-section='team'>
            <p className="heading">The Executive Team</p>
            <div className="row">
                {ExecutivesData.map((exec, index) => (
                    <SinglePerson exec={exec} key={index} />
                ))}
            </div>
        </div>
    )
}