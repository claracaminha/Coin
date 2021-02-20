import * as ReactBootStrap from "react-bootstrap"
import Tasks from './Tasks'


const Table = ({ tasks}) => {
    return (
        <ReactBootStrap.Table striped bordered hover>
            <thead>
                <tr>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Market Cap</th>
                   <th>Supply</th>
                </tr>
            </thead>
            <tbody>
            <Tasks tasks={tasks}  /> 
            </tbody>
        </ReactBootStrap.Table>
            
      
    )
  }
  
  export default Table

