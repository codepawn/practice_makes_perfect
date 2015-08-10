require 'test_helper'

class TestscaffoldsControllerTest < ActionController::TestCase
  setup do
    @testscaffold = testscaffolds(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:testscaffolds)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create testscaffold" do
    assert_difference('Testscaffold.count') do
      post :create, testscaffold: {  }
    end

    assert_redirected_to testscaffold_path(assigns(:testscaffold))
  end

  test "should show testscaffold" do
    get :show, id: @testscaffold
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @testscaffold
    assert_response :success
  end

  test "should update testscaffold" do
    patch :update, id: @testscaffold, testscaffold: {  }
    assert_redirected_to testscaffold_path(assigns(:testscaffold))
  end

  test "should destroy testscaffold" do
    assert_difference('Testscaffold.count', -1) do
      delete :destroy, id: @testscaffold
    end

    assert_redirected_to testscaffolds_path
  end
end
