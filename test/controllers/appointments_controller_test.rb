require 'test_helper'

class AppointmentssControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get appointmentss_index_url
    assert_response :success
  end

end
