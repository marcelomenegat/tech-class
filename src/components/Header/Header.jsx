import React from "react";
import { Button } from 'reactstrap';
        
const Header = () => {
  
  const logo = require('../../assets/img/tutormatch-logo.svg');  

  return (
      
      <header className="header d-table w-100">
        
          <div className="p-relative d-trow">
            <span className="f-left">
              <img src={ logo } alt="TUTORMATCH" />
            </span>
            <span className="f-right">
              Became a Tutor <Button className="ml-10"> Sign In</Button>
            </span>
          </div>
          
          <div className="d-trow ">
            <h1 className="h-title mt-50"> The place where Tutors and Students meet </h1>
            <h5 className="pt2-5"> Find out who can help you take your education to the next level </h5>
            
            <div className="pt-30">
              <Button color="success">Get started now</Button>
            </div>
          </div>
          
        </header>
  );
}

export default (Header);