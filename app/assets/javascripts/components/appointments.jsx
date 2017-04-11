var Appointments = React.createClass({
  //handles obtaining initial data state
  getInitialState: function(){
    return {
      appointments: this.props.appointments,
      title: 'This is set via getInitialState',
      appt_time: 'Me too!'
    }
  },
  //handles changing data state
  handleUserInput: function(obj){
    this.setState(obj)
  },
  //handles AJAX (POST) request
  handleFormSubmit: function(){
    // S1: define the object to be sent over AJAX request in json form
    var appointment = {title: this.state.title, appt_time: this.state.appt_time};
    // S2: $, type of request, endpoint, object to be sent in json form, 'bind' is used to fix scope problem in L24
    $.post('/appointments', {appointment: appointment}).done(function(data){
      this.addNewAppointment(data);
    }.bind(this));
  },
  //S3: contains method from react addons to update data, arrange data sequencing
  addNewAppointment: function(appointment){
    var appointments = React.addons.update(this.state.appointments, {$push: [appointment]});
    //responsible for how the data should be arranged in UI
    this.setState({appointments: appointments.sort(function(a,b){
      return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  },
  //handles layout rendering
  render: function(){
    return(
      <div>
        <AppointmentForm input_title={this.state.title} input_appt_time={this.state.appt_time} 
        onUserInput={this.handleUserInput} onFormSubmit={this.handleFormSubmit}/>
        <AppointmentsList appointments={this.state.appointments}/>
      </div>
    )
  }
});


