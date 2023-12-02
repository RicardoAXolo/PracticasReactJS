import './App.css';
import { Component, useState } from 'react';
import { propTypes } from 'react';
import Header from './components/Header';
import CompMaterias from './components/CompMaterias'
import CompHorario from './components/CompHorario'
import Body from './components/Body'
import Footer from './components/Footer';

class App extends Component{
/*  const [Materias,setMaterias] = useState([
      { Clave: "AEB-1001", Materia: "Desarrollo de aplicaciones móviles", Hora: "13:00-14:00", Grupo: "F8A" },
      { Clave: "IFF-1012", Materia: "Estrategias de gestion", Hora: "14:00-15:00", Grupo: "F8A" },
      { Clave: "IFD-1023", Materia: "Taller de emprendedores", Hora: "17:00-18:00", Grupo: "F8A" },
      { Clave: "IFF-1016", Materia: "Inteligencia de Negocios", Hora: "16:00-17:00", Grupo: "F8A" },
      { Clave: "IFD-1023", Materia: "Taller de emprendedores", Hora: "14:00-15:00", Grupo: "F8B" },
      { Clave: "IFF-1012", Materia: "Estrategias de gestion", Hora: "15:00-16:00", Grupo: "F8B" },
      { Clave: "AEB-1001", Materia: "Desarrollo de aplicaciones moviles", Hora: "16:00-17:00", Grupo: "F8B" },
      { Clave: "IFF-1016", Materia: "Inteligencia de Negocios", Hora: "17:00-18:00", Grupo: "F8B" }
  ]);
  const [Horario,setHorario] = useState([]);
  const agregar=(p)=>{
    console.log(p); 
    setHorario(p)
    console.log("Hola1")
  }
  const quitar=(p)=>{
    console.log("Hola2");
  }*/
  state={
    materias:[
      { Clave: "AEB-1001", Materia: "Desarrollo de aplicaciones móviles", Hora: "13:00-14:00", Grupo: "F8A" },
      { Clave: "IFF-1012", Materia: "Estrategias de gestion", Hora: "14:00-15:00", Grupo: "F8A" },
      { Clave: "IFD-1023", Materia: "Taller de emprendedores", Hora: "17:00-18:00", Grupo: "F8A" },
      { Clave: "IFF-1016", Materia: "Inteligencia de Negocios", Hora: "16:00-17:00", Grupo: "F8A" },
      { Clave: "IFG-1023", Materia: "Taller de emprendedores", Hora: "14:00-15:00", Grupo: "F8B" },
      { Clave: "IFG-1012", Materia: "Estrategias de gestion", Hora: "15:00-16:00", Grupo: "F8B" },
      { Clave: "AEG-1001", Materia: "Desarrollo de aplicaciones moviles", Hora: "16:00-17:00", Grupo: "F8B" },
      { Clave: "IFG-1016", Materia: "Inteligencia de Negocios", Hora: "17:00-18:00", Grupo: "F8B" }
    ],
    horario:[]
  }
  agregar=(p)=>{
    console.log(p)
    this.setState({
      horario:[...this.state.horario,p]
    })
  }
  eliminar=(p)=>{
    console.log(p)
    let temporal = this.state.horario.filter((elemento,i)=>elemento.Clave!==p.Clave);
    this.setState({
      horario:temporal
    })
  }
  verificar=(p)=>{
    let temp = this.state.horario.find((a,i)=>a.Clave===p.Clave || a.Hora===p.Hora)
    return temp;
  }
  render(){
    return(
      
      <div className='App'>
        <Header/>
        <body className='Body'>
          <CompMaterias
          materias={this.state.materias}
          agregar={this.agregar}
          verificar={this.verificar}
          />
        <CompHorario
        horario={this.state.horario}
        eliminar={this.eliminar}
        />
        </body>
        <Footer>
          RICARDO AMADOR XOLO
        </Footer>
      </div>
    );
  }
}

export default App;
/* 
<table> <h3 style={{border:'1px solid #000',paddingRight:25,paddingLeft:25}}>Materias</h3>
              <tr>
                <th className='celdasTab'>Clave</th>
                <th className='celdasTab'>Materia</th>
                <th className='celdasTab'>Hora</th>
                <th className='celdasTab'>Grupo</th>
                <th></th>
              </tr>
              <tbody>
              {
              Materias.map((p,i)=>
              <tr key={i}>
              <td className='celdasTab'>{p.Clave}</td>
              <td className='celdasTab'>{p.Materia}</td>
              <td className='celdasTab'>{p.Hora}</td>
              <td className='celdasTab'>{p.Grupo}</td>
              <td><button className='btnAdd' onClick={()=>agregar(p)}>+</button></td>
              </tr>
              )}
              </tbody>
            </table>
          </div>
          <div>
          <table> <h3 style={{border:'1px solid #000',paddingRight:25,paddingLeft:25}}>Horario</h3>
          <tr>
                <th className='celdasTab'>Clave</th>
                <th className='celdasTab'>Materia</th>
                <th className='celdasTab'>Hora</th>
                <th className='celdasTab'>Grupo</th>
                <th></th>
              </tr>
              <tbody>
              {
              Horario.map((e,i)=>
              <tr key={i}>
              <td className='celdasTab'>{e.Clave}</td>
              <td className='celdasTab'>{e.Materia}</td>
              <td className='celdasTab'>{e.Hora}</td>
              <td className='celdasTab'>{e.Grupo}</td>
              <td><button onClick={()=>quitar(i)} className='btnDel'>-</button></td>
            </tr>
              )}
              </tbody>
            </table>
*/