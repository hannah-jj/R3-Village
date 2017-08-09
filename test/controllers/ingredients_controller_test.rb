require 'test_helper'

class IngredientsControllerTest < ActionDispatch::IntegrationTest
  test "should get name:text" do
    get ingredients_name:text_url
    assert_response :success
  end

  test "should get picture:string" do
    get ingredients_picture:string_url
    assert_response :success
  end

end
