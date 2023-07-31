import React from 'react'
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js"
import { BsDot } from "react-icons/bs";
import {Doughnut} from "react-chartjs-2";
import{Card,Row,Col} from "react-bootstrap"

ChartJS.register(ArcElement,Tooltip,Legend);


const Dounut = () => {
    const data={
        labels:['Desktop','Tablets','Mobiles'],
        datasets:[{
            
            data:[3561,1443,2462],
            backgroundColor:['orange','Blue','Green'],
        
            
        }]
    }
    const options={

    }


    const details=[
      {
      Desktop:"3561",
      Tablets:"1443",
      Mobiles:"2462",
    }
  ]
  return (
    <>
    <Row className='mb-3'>
      <Col md={9}>
      <Card>
      <div className='dounut'>
    <Doughnut data={data}options={options}/>
    </div>
    <Card.Body>
    <ul>
     { details.map((num)=>{
      return(
        <>
          <div>
          <span><BsDot/></span>Desktop{num.Desktop}
          </div>
       <div>
       <span><BsDot/></span> Tablets{num.Tablets}
       </div>
       <div>
       <span><BsDot/></span>  Mobiles{num.Mobiles}
       </div>
      
        </>
      )
     })}
    </ul>
    </Card.Body>
      </Card>
      </Col>
    </Row>
    
     
    </>
  )
}

export default Dounut;
