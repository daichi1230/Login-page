const Header = ({title}) => {
    return (
        <header>
            <img src="/bouldering/img/bouldering" 
                alt="Logo"
                width={500}
                height={400}
                className="main_logo"/>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "ログイン"
}
export default Header