
const CompMaterias =(props)=>{
    return(
        <div>
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
              props.materias.map((p,i)=>
              <tr key={i}>
              <td className='celdasTab'>{p.Clave}</td>
              <td className='celdasTab'>{p.Materia}</td>
              <td className='celdasTab'>{p.Hora}</td>
              <td className='celdasTab'>{p.Grupo}</td>
              <td><button disabled={props.verificar(p)}  className='btnAdd' onClick={()=>props.agregar(p)}>+</button></td>
              </tr>
              )}
              </tbody>
            </table>
        </div>
    );
}
export default CompMaterias;