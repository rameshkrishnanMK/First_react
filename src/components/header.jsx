import PropTypes from 'prop-types'
function Header({text}){
    return(
        <div>
            <p>{text}</p>
        </div>
    )
}

// Default props
Header.defaultProps={
    text:"feedback ui"
}

//if you want particulat type of props
Header.propTypes={
    text:PropTypes.string.isRequired
}

export default Header