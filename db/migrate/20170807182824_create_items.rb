class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.text :name
      t.integer :size
      t.string :picture

      t.timestamps
    end
  end
end
