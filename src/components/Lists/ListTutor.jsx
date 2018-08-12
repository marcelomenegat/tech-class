import React from "react";
import { Row, Col } from 'reactstrap';
import CardTutor from "../Cards/CardTutor.jsx"; 

const ListTutor = ({ ...props }) => {
    
  const {
    tutors
  } = props;
  
  return (
      <Row className="pt-50 m-20 bts-1">
        {
        tutors ?
        tutors.map((tutor, key) => {
            return (
                <Col key={key } sm="3 pb-20">
                    <CardTutor tutor={ tutor }>
                    </CardTutor>
                </Col>
            )
        })
        : null
        }
      </Row>
  );
}

export default (ListTutor);