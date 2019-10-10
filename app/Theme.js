import PropTypes from 'prop-types';

// * Consider these dark colors too! 
// * Dark Blue -> '#0F2027' && '#203A43'

let ThemeValues = {
    
    margin: 16,
    padding: 16,
    spacing: 4,

    primary: '#E74C3C',
    darkPrimary: '#141E30',
    
    secondary: '#2C3E50',
    darkSecondary: '#243B55',

    container: '#FFFFFF',
    darkContainer: '#000000',

    background: '#FAFAFA',
    darkBackground: '0A0A0A',

    decoration: '#EEEEEE',
    darkDecoration: '#EEEEEE',

    primaryFont: '#505050',
    secondaryFont: '#FFFFFF'

}

const ThemeTypes = PropTypes.shape({

    margin: PropTypes.number,
    padding: PropTypes.number,
    spacing: PropTypes.number,
    
    primary: PropTypes.string,
    darkPrimary: PropTypes.string,
    
    secondary: PropTypes.string,
    darkSecondary: PropTypes.string,

    container: PropTypes.string,
    darkContainer: PropTypes.string,
    
    background: PropTypes.string,
    darkBackground: PropTypes.string,

    decoration: PropTypes.string,
    darkDecoration: PropTypes.string,

    primaryFont: PropTypes.string,
    secondaryFont: PropTypes.string

})

export { ThemeTypes, ThemeValues };