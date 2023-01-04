import './button.styles.scss'

/*
3 different types of buttons:

default 

inverted

google sign in

*/

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}



export const Button = ( {children, buttonType, ...otherProps } ) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>    
      {children}
    </button>
  )
}