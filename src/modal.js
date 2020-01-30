import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            id: '',
            Name: '',
            AfterName: '',
            phone : '',
            adresse: '',
            birthDate : '',
            IsActive :'',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            Name: nextProps.Name,
            AfterName: nextProps.AfterName,
            phone: nextProps.phone,
            adresse: nextProps.adresse,
            birthDate: nextProps.birthDate,
            IsActive: nextProps.IsActive,


        });
    }
   

    NameHandler(e) {
        this.setState({ title: e.target.value });
    }

    AfterNameHandler(e) {
        this.setState({ msg: e.target.value });
    }
    phoneHandler(e) {
        this.setState({ msg: e.target.value });
    }
    adresseHandler(e) {
        this.setState({ msg: e.target.value });
    }
    birthDateHandler(e) {
        this.setState({ msg: e.target.value });
    }
    isactiveHandler(e) {
        this.setState({ msg: e.target.value });
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
                            <p><span className="modal-lable">Name:</span><input value={this.state.Name} onChange={(e) => this.NameHandler(e)} /></p>
                            <p><span className="modal-lable">AfterName:</span><input value={this.state.AfterName} onChange={(e) => this.AfterNameHandler(e)} /></p>
                            <p><span className="modal-lable">Phone:</span><input value={this.state.phone} onChange={(e) => this.phoneHandler(e)} /></p>
                            <p><span className="modal-lable">Adresse:</span><input value={this.state.adresse} onChange={(e) => this.adresseHandler(e)} /></p>
                            <p><span className="modal-lable">BirthDate:</span><input value={this.state.birthDate} onChange={(e) => this.birthDateHandler(e)} /></p>
                            <p><span className="modal-lable">IsActive:</span><input value={this.state.IsActive} onChange={(e) => this.isactiveHandler(e)} /></p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Quitter</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Enregistrer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;