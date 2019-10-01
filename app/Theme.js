import PropTypes from 'prop-types';


let ThemeValues = {
    
    margin: 16,
    padding: 16,
    spacing: 4,

    primary: '#E74C3C',
    // darkPrimary: '#EE0979',
    darkPrimary: '#e96443',
    // darkPrimary: '#7474BF',
    // darkPrimary: '#E55D87',

    secondary: '#2C3E50',
    // darkSecondary: '#FF6A00',
    darkSecondary: '#904e95',
    // darkSecondary: '#348AC7',
    // darkSecondary: '#5FC3E4',

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

    margin: PropTypes.number.isRequired,
    padding: PropTypes.number.isRequired,
    spacing: PropTypes.number.isRequired,
    
    primary: PropTypes.string.isRequired,
    darkPrimary: PropTypes.string.isRequired,
    
    secondary: PropTypes.string.isRequired,
    darkSecondary: PropTypes.string.isRequired,

    container: PropTypes.string.isRequired,
    darkContainer: PropTypes.string.isRequired,
    
    background: PropTypes.string.isRequired,
    darkBackground: PropTypes.string.isRequired,

    decoration: PropTypes.string.isRequired,
    darkDecoration: PropTypes.string.isRequired,

    primaryFont: PropTypes.string.isRequired,
    secondaryFont: PropTypes.string.isRequired

})

export { ThemeTypes, ThemeValues };