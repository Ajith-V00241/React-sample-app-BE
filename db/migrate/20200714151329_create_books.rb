class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title, null:false
      t.string :author, null:false
      t.string :publisher, null:false
      t.string :language, null:false
      t.text :description, null:false
      t.integer :totalBooks, default: 0
      t.integer :availableBooks, default: 0
      t.string :image, default: "/app/assests/images/logo.jpg"

      t.timestamps
    end
  end
end
