import PropTypes from "prop-types";
import UserTypes from "./User"

export default PropTypes.shape({

    user: UserTypes,
    people: PropTypes.object.isRequired,
    congress: PropTypes.object.isRequired

});