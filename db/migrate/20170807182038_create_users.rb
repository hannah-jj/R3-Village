class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.text :name
      t.integer :happiness
      t.integer :pollution
      t.integer :limit

      t.timestamps
    end
  end
end
