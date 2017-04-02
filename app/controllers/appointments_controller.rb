class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order("appt_time ASC") #ordering appointment list by the nearest appointment
    @appointment = Appointment.new #creating new appointment object
  end

  def create
    @appointment = Appointment.create(appointment_params)
    @appointments = Appointment.order("appt_time ASC") #this is needed to fetch the latest appointment date from the server
    # redirect_to root_path #this was originally implemented. But, using the line above, the redirect_to is no more needed
    # @appointment.save

  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
