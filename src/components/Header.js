const Header = ({title}) => {
    return (
        <header>
            <img src="/bouldering/img/ゆうロックロゴCS1 (1).ai" 
                alt="Logo"
                width={100}
                height={100}
                className="main_logo"/>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "ログイン"
}
export default Header