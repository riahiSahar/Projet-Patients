import React, { Component } from 'react';

class Modaladd extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
    }
   
  

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modifier</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Name:</span><input value={this.state.Name}  /></p>
                            <input type="text" ref="textBox" name="Name" value="rName"></input><br></br>
                            <p><span className="modal-lable">AfterName:</span><input value={this.state.AfterName}  /></p>
                            <input type="text" ref="textBox" name="AfterName" value="AfterName"></input><br></br>
                            <p><span className="modal-lable">Phone:</span><input value={this.state.phone} /></p> 
                            <input type="text" ref="textBox" name="phone" value="phone"></input><br></br>
                            <p><span className="modal-lable">Adresse:</span><input value={this.state.adresse} /></p>
                            <input type="text" ref="textBox" name="adresse" value="adresse"></input><br></br>
                            <p><span className="modal-lable">BirthDate:</span><input value={this.state.birthDate}  /></p>
                            <input type="text" ref="textBox" name="birthdate" value="birthdate"></input><br></br>
                            <p><span className="modal-lable">IsActive:</span><input value={this.state.IsActive}  /></p>
                            <input type="text" ref="textBox" name="isactive" value="Aisactive"></input><br></br>

                        </div>
                        <div className="modal-footer">
                           
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Enregistrer</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modaladd;