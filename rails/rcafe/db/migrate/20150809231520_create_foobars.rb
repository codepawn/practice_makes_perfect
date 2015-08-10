mclass CreateFoobars < ActiveRecord::Migration
  def change
    create_table :foobars do |t|
      t.text :content
      t.timestamps null: false
    end
  end
end
