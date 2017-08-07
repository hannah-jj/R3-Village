class CreateBoxes < ActiveRecord::Migration[5.1]
  def change
    create_table :boxes do |t|
      t.boolean :active
      t.integer :reuse
      t.boolean :recycled
      t.boolean :trashed
      t.integer :user_id
      t.integer :item_id

      t.timestamps
    end
  end
end
