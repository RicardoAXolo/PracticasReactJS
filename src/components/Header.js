import logoITT from '../LogoITT.jpg';

function Header(){
    return(
        <div>
        <header className='Header'>
          <img className='App-logo' src={logoITT}/>
          <p>Instituto Tecnologico de Tijuana</p>
        </header>
        </div>
    );
}
export default Header;
