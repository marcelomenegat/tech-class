import React, { Component } from 'react';
import { Container, ButtonGroup, Button } from 'reactstrap';
import { ListTutor } from '../../components';
// Just for local tests
import MockDb from "../../mocks/db.json";
import axios from 'axios';

//const Body = ({ ...props }) => {
class Body extends Component {

  constructor(props){     
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      error: null,
      isLoaded: false,      
      lTutors: [],
      filter: [],
      sort: []
    }

    this.filterTutors('');
    
   }

  filterTutors = async (params) => {
    
    try {
      let url = 'https://my-json-server.typicode.com/marcelomenegat/tech-class/tutors';           
      let filters = '';     

      if(params !== ""){      
        filters = params;
      } 

      const query = url + filters;
      await axios.get(query)
          .then((response) => {
            
            if(response.data && response.data.length > 0){
              this.state.lTutors = response.data;
              this.state.search = "";
              console.log('pegou tudo')
            }else {
              this.state.lTutors = []; //MockDb.tutors;
              this.state.search = "";              
            }
          })
          .catch((error) => {
            this.state.lTutors = []; //MockDb.tutors;
            this.state.search = "";
          })
          .then(() => {
            // always executed            
          });      
      
    } catch (error) {
      console.log('error', error)
      // If there's an error, set the error to the state
      //  this.setState(() => ({ error }))
    }
  }

 handleOnClick = async (event) =>  {
    // some action... changeFilter(filter).then(() =>
    let filter = '';
    let sort = '';
    let query = '';

    switch (event.option) {
      case 'filter':
        //const f = this.state.lFilter.find(filter => filter = event.value);
        this.state.filter = event.value;
        filter = 'city=' + event.value;
        break;
      case 'sort':
        sort = '_sort=' + event.value;
        if(this.state.sort === event.value ){
          sort += '&_order=asc';
        }else{
          sort += '&_order=desc';
        }
        this.state.sort = event.value;
        break;
      default:
        break;
    }


    if(this.state.filter !== ''){
      query = '/?' + filter;
      if(this.state.sort !== ''){
        query += '&' + sort;
      }
    }else if(this.state.sort !== ''){
      query = '/?' + sort;
    }

    if(query !== "") {           
      await this.filterTutors(query);
      this.state.search = query;            
    }    
  }  

  async componentDidMount() {
    console.log('dimount')
    await this.filterTutors('');
  }

  render(){
    const { search, lTutors } = this.state;
    /*
    if(search !== ""){            
      <Redirect push to={ search } />       
    }
    */

    return( 

      <Container fluid className="pt-30">
         
          <div className="h-200 w-100 d-table">
            <div className="va-middle d-tcell">
              <h1>Our Tutors</h1>
              <h5> We have more than 100 tutors from various disciplines ready to match with you.</h5>
            </div>
          </div>
          
          <div className="t-body">
          
            <div className="ta-left m-20">
              <span>Filter by: 
                  <ButtonGroup className="ml-10">
                    <Button onClick={() => this.handleOnClick({option: 'filter', value: 'Liverpool'})} > Liverpool</Button>
                    <Button onClick={() => this.handleOnClick({option: 'filter', value: 'London'} )} > London  </Button>
                    <Button onClick={() => this.handleOnClick({option: 'filter', value: 'Manchester'})} > Manchester </Button>
                  </ButtonGroup> 
              </span>
              <span className="ml-10"> 
                Sort by:                  
                <ButtonGroup className="ml-10">
                  <Button onClick={() => this.handleOnClick({option: 'sort', value: 'name'})}>Name</Button>
                  <Button onClick={() => this.handleOnClick({option: 'sort', value: 'city'})}>City</Button>
                </ButtonGroup>
              </span>
            </div>
              
            
             <ListTutor tutors={ lTutors }>
             </ListTutor>            
            
            <div className="mh-200 ">
              <div className="w-100 d-table">
                <Button className="d-tcell va-middle" onClick={() => this.handleOnClick({option: 'all', value: 'all'})}> See all tutors </Button>
              </div>
            </div>
          
          </div>
          
        </Container>
  );
}
}

export default (Body);