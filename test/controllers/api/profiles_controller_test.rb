require 'test_helper'

class Api::ProfilesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_profiles_index_url
    assert_response :success
  end

  test "should get create" do
    get api_profiles_create_url
    assert_response :success
  end

end
