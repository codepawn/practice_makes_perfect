class CreateTestscaffolds < ActiveRecord::Migration
  def change
    create_table :testscaffolds do |t|

      t.timestamps null: false
    end
  end
end
