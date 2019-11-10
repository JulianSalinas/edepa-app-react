import PropTypes from 'prop-types';


const CommonTypes = {
    title: PropTypes.string,
    brief: PropTypes.string,
    end: PropTypes.number,
    start: PropTypes.number,
    location: PropTypes.string
}

const PositionTypes = PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
});

const HomeTypes = PropTypes.shape({
    ...CommonTypes,
    position: PositionTypes,
    tag: PropTypes.string
});

const PreviewTypes = PropTypes.shape({
    header: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    url: PropTypes.string
})

const PostTypes = PropTypes.shape({
    key: PropTypes.string,
    time: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    preview: PreviewTypes
})

const EventTypes = PropTypes.shape({
    ...CommonTypes,
    id: PropTypes.string,
    key: PropTypes.string,
    eventype: PropTypes.string,
    favorites: PropTypes.number,
    isFavorite: PropTypes.bool,
}).isRequired;

const UserTypes = PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    photoUrl: PropTypes.string,
    allowPhoto: PropTypes.bool
}).isRequired;

// TODO: Remove personalName
const PersonTypes = PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    personalName: PropTypes.string,
    title: PropTypes.string,
    about: PropTypes.string,
});

export {
    PositionTypes,
    HomeTypes,
    EventTypes,
    UserTypes,
    PersonTypes,
    PostTypes
}