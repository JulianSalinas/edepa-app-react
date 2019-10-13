import PropTypes from 'prop-types';
import { ThemeTypes } from './Theme';


const CommonTypes = {
    title: PropTypes.string,
    brief: PropTypes.string,
    end: PropTypes.number,
    start: PropTypes.number,
    location: PropTypes.string
}

const PositionTypes = PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
}).isRequired;

const HomeTypes = PropTypes.shape({
    ...CommonTypes,
    position: PositionTypes,
    tag: PropTypes.string
}).isRequired;

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

const PersonTypes = PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    personalName: PropTypes.string,
    title: PropTypes.string,
    about: PropTypes.string,
}).isRequired;

const FeelTypes = PropTypes.shape({
    ...ThemeTypes,
    darkMode: PropTypes.bool,
    changeDarkMode: PropTypes.func
}).isRequired;

const StoreTypes = PropTypes.shape({
    // home: HomeTypes,
    events: PropTypes.arrayOf(EventTypes),
    people: PropTypes.arrayOf(PersonTypes)
}).isRequired;

const ScreenTypes = PropTypes.shape({
    feel: FeelTypes,
    store: StoreTypes
}).isRequired;

export { 
    PositionTypes, 
    HomeTypes, 
    EventTypes, 
    UserTypes, 
    PersonTypes, 
    StoreTypes, 
    FeelTypes, 
    ScreenTypes 
}