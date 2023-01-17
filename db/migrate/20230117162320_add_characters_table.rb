class AddCharactersTable < ActiveRecord::Migration[7.0]
  def change
    create_table :characters, id: :uuid do |t|
      t.string :name, null: false
      t.string :location, null: false

      t.timestamps
    end
  end
end
