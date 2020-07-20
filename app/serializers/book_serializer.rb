class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :author, :description, :publisher, :language, :image, :totalBooks, :availableBooks
end
