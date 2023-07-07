import React from 'react'
import Table from "react-bootstrap/Table";
import {Card,Row, Col,Container} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";


const Visited = () => {

               const pages=[
                {
                home: "Home",
                file:"/app/home/",
                number:7865,
                social:"Facebook",
                count:"Total:782",
                growth:"30.1%",
                logo:<FaFacebookSquare color='rgb(23, 116, 235)' />,
                clr:"red",


            },
            {
                home: "Resources",
                file:"/app/resources/",
                number:6865,
                social:"Youtube",
                count:"Total:322",
                growth:"30.1%",
                logo:<BsYoutube color='rgb(255, 0, 0)'/>,

            },
            {
                home: "Integration",
                file:"/integrations/paypal/",
                number:3865,
                social:"LinkedIn",
                count:"Total:322",
                growth:"0.1%",
                logo:<BsLinkedin color='rgb(0, 119, 180)'/>,

            },
            {
                home: "Partners",
                file:"/partners/our-partners/",
                number:7565,
                social:"Twitter",
                count:"Total:322",
                growth:"10.1%",
                logo:<BsTwitter color='(28, 157, 235)'/>,

            },
            {
                home: "Developers",
                file:"developers/docs/",
                number:9065,
                social:"Drebbile",
                count:"Total:322",
                growth:"40.1%",
                logo:<BsDribbble color='rgb(228, 74, 133)'/>,

            },

        ]

  return (

    <>
    <Container>
        <Row>
           <Col md={6}>
            <Card>
            <h6 className='p-2'>Most Visited Pages</h6>
<Table>
<tbody>
    {pages.map((page, index)=>{
        return(
            <>
                <tr key={index} className='d-flex align-item-center justify-content-between'>
                    <div>
                    <td className=''>{page.home}</td>
                   <span> <td className='text-muted'>{page.file}</td></span>
                    </div>
                   
                    <td><Button variant="info">{page.number}</Button></td>
                </tr>
            </>
        )
    })}
</tbody>
</Table>
</Card>
           </Col>
       



        
           <Col md={6}>
            <Card>
            <h5 className='p-2'>Social media refferals</h5>
<Table>
<tbody>
    {pages.map((page, index)=>{
        return(
            <>
                <tr key={index} className='d-flex align-item-center justify-content-between'>
                 <div className='d-flex align-items-center'>
                   <span className='fs-2 text-info'>{page.logo}</span>
                   <div>
                    <td className=''>{page.social}</td>
                   <span> <td className='text-muted'>{page.count}</td></span>
                   </div>
                    </div>
                   
                    <td><Button variant="info">{page.growth}</Button></td>
                </tr>
            </>
        )
    })}
</tbody>
</Table>
</Card>
           </Col>
        </Row>
    
        </Container>
    </>
  )
}

export default Visited
