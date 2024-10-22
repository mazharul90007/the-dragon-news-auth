import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;

    return (
        <div className="card bg-base-100 shadow-md mb-4">
            <h2 className="card-title">{title}</h2>
            <figure>
                <img
                    src={image_url} />
            </figure>
            <div className="card-body">
            {
                details.length > 200 
                ? 
                <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-orange-500 font-semibold">Read More</Link></p>
                :
                <p>{details}</p>
            }
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object
}