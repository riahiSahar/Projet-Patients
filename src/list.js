import React, { Component } from 'react';
import Modal from './modal.js';
import './modaladd.js';

function searchingFor(term){
    return function(x){
        return x.id.includes(term)|| !term && x.Name.includes(term)|| !term && x.AfterName.includes(term)||!term && 
    x.phone.includes(term)||!term && x.adresse.includes(term)||!term
    && x.birthDate.includes(term)||!term && x.IsActive.includes(term)||!term;
    }
    }

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient : patient,
            term : '',
          }
    
        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.replaceModalAddItem = this.replaceModalAddItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.searchPatient= this.searchPatient.bind(this);
        this.state = {
          requiredItem: 0,
          patient: [
            {
                id:1,
              Name: "Sahar",
              AfterName: "Riahi",
              phone: "542158568",
              adresse:"Tunisie",
              birthDate:"29 juillet",
              IsActive:"oui"
            }, {
                id:2,
                Name: "Sarah",
                AfterName: "dagdagui",
                phone: "21585878",
                adresse:"Canada",
                birthDate:"2 avril",
                IsActive:"non"
            }, {id:3,
                Name: "John",
                AfterName: "louis",
                phone: "2158579",
                adresse:"France",
                birthDate:"5 mars",
                IsActive:"oui"
            }
          ]
        }
      }
     
      searchPatient(event){
        this.setState({term : event.target.value})
 }
  replaceModalItem(index) {
    this.setState({
      requiredItem: index 
    });
  }
  replaceModalAddItem(index) {
    this.setState({
      requiredItem: index 
    });
  }
  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let temppatient = this.state.patient;
    temppatient[requiredItem] = item;
    this.setState({ patient: temppatient });
  }

  deleteItem(index) {
    let tempPatient = this.state.patient;
    tempPatient.splice(index, 1);
    this.setState({ patient: tempPatient });
  }

  render() {  
           <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-dismiss="modaladd"
         onClick={() => { this.replaceModalAddItem(index) }}>Ajouter un patient </button>
           </div> 
        const { term, patient}=this.state; 
  const patient = this.state.patient.filter(searchingFor(term)).map((item, index) => {
    
        return (
        <div className="App">
      <form>
                <input type="text" onChange={this.searchPatient} value={term}></input>
    </form>
    
        <tr key={index}>
          <td>{item.Name}</td>
          <td>{item.AfterName}</td>
          <td>{item.phone}</td>
          <td>{item.adresse}</td>
          <td>{item.birthDate}</td>
          <td>{item.IsActive}</td>

          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>Modifier</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>Supprimer</button>
          </td>
        </tr>
        </div>
    )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.patient[requiredItem];
    return (
      <div>
        
        <table className="table table-striped">
          <tbody>
            {patient}
          </tbody>
        </table>
        <Modal
          Name={modalData.Name}
          AfterName={modalData.AfterName}
          phone={modalData.phone}
          adresse={modalData.adresse}
          birthDate={modalData.birthDate}
          IsActive={modalData.IsActive}


          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;