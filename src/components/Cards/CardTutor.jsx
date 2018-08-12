import React from "react";
import { Card, CardImg, CardText, CardBody,
        CardTitle, Button } from 'reactstrap';

const CardTutor = ({ ...props }) => {

  const { tutor } = props;  
  const studentAvatar = require('../../assets/img/student-photo.svg');
  const tutorAvatar   = tutor.avatar !== "" ? tutor.avatar : require('../../assets/img/user-photo.svg');
 
  function listStudents() {    
    if(tutor.students){      
      return ( 
          tutor.students.map((studant, key) =>{
            const avatar =  studant.avatar !== "" ? studant.avatar : studentAvatar;                             
            return ( <CardImg key={ key } className="br-25 w-30 h-30 mr2-5 bgc-lg2" src={ avatar } alt={ studant.name }/> )
          }
        ))
    }
  }
   
  return (
          
          <Card>
            <CardImg top width="100%" height="70%" className="bgc-lg2" src={ tutorAvatar } alt={ tutor.name } />
            <CardBody className="bgc-lg">
              <div className="ta-left m-20">
                <CardTitle>  { tutor.name } </CardTitle>                    
                  <CardText className="mt-15">
                        
                        <div className="mt-15">
                          <span>City</span>
                          <div>
                            <Button> { tutor.city } </Button>  
                          </div>
                        </div>
                        
                        <div className="mt-15">
                          <span>Students so far</span>
                          <div className="mt-10">
                            { 
                              listStudents()
                            /* tutor.students.map((studant, key) =>{
                                const avatar =  studant.avatar !== "" ? studant.avatar : studentAvatar;                             
                                return ( <CardImg key={ key } className="br-25 w-30 h-30 mr2-5" src={ avatar } alt={ studant.name }/> )
                              }) */
                            }
                          </div>
                        </div>
                      
                  </CardText>
              </div>                
            </CardBody>
        </Card>
  );
}

export default (CardTutor);
