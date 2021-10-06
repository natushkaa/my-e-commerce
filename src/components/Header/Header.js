import './Header.css'

export const name= "Velitas";
export const foo = () => console.log("fuego")

const Header = (props) => {
    return(
        <h1> {props.title}{props.subtitle}</h1>
        

    )
}


export default Header;