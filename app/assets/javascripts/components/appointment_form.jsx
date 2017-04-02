var AppointmentForm = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Book an Appointment Now!</h2>
        <form>
          <input name="title" placeholder="Title"/>
          <input name="appt_time" placeholder="Date and Time"/>
          <input type="submit" value="Create Appointment!"/>
        </form>
      </div>
    )

  }
});
