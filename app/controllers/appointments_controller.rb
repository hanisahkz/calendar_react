class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order("appt_time ASC") #ordering appointment list by the nearest appointment
    @appointment = Appointment.new #creating new appointment object
  end

  def create
    # the action below will create 'a new appointment' && the data will be inserted/placed by react in its place 
    @appointment = Appointment.new(appointment_params)

    if @appointment.save 
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end

    # old
    # @appointment = Appointment.create(appointment_params)
    # @appointments = Appointment.order("appt_time ASC") #this is needed to fetch the latest appointment date from the server
    # redirect_to root_path #this was originally implemented. But, using the line above, the redirect_to is no more needed
    # @appointment.save

  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
