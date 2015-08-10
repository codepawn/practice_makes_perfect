class TestscaffoldsController < ApplicationController
  before_action :set_testscaffold, only: [:show, :edit, :update, :destroy]

  # GET /testscaffolds
  # GET /testscaffolds.json
  def index
    @testscaffolds = Testscaffold.all
  end

  # GET /testscaffolds/1
  # GET /testscaffolds/1.json
  def show
  end

  # GET /testscaffolds/new
  def new
    @testscaffold = Testscaffold.new
  end

  # GET /testscaffolds/1/edit
  def edit
  end

  # POST /testscaffolds
  # POST /testscaffolds.json
  def create
    @testscaffold = Testscaffold.new(testscaffold_params)

    respond_to do |format|
      if @testscaffold.save
        format.html { redirect_to @testscaffold, notice: 'Testscaffold was successfully created.' }
        format.json { render :show, status: :created, location: @testscaffold }
      else
        format.html { render :new }
        format.json { render json: @testscaffold.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /testscaffolds/1
  # PATCH/PUT /testscaffolds/1.json
  def update
    respond_to do |format|
      if @testscaffold.update(testscaffold_params)
        format.html { redirect_to @testscaffold, notice: 'Testscaffold was successfully updated.' }
        format.json { render :show, status: :ok, location: @testscaffold }
      else
        format.html { render :edit }
        format.json { render json: @testscaffold.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /testscaffolds/1
  # DELETE /testscaffolds/1.json
  def destroy
    @testscaffold.destroy
    respond_to do |format|
      format.html { redirect_to testscaffolds_url, notice: 'Testscaffold was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testscaffold
      @testscaffold = Testscaffold.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def testscaffold_params
      params[:testscaffold]
    end
end
