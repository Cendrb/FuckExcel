class CreateTableRows < ActiveRecord::Migration
  def change
    create_table :table_rows do |t|
      t.integer :order_number
      t.string :data
      t.integer :table_id

      t.timestamps null: false
    end
  end
end
