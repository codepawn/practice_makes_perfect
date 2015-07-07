class CreateScaffolds < ActiveRecord::Migration
  def change
    create_table :scaffolds do |t|

      t.timestamps null: false
    end
  end
end
