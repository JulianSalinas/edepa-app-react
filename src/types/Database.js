import PropTypes from "prop-types";
import UserTypes from "./User"

export default PropTypes.shape({

    user: UserTypes,
    events: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    congress: PropTypes.object.isRequired

});