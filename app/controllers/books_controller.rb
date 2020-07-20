class BooksController < ApplicationController
    skip_forgery_protection
    wrap_parameters format: [:json]
    def index
        books = Book.all
        render json: BookSerializer.new(books).serialized_json
    end
    
    def show
        book = Book.find(params[:id])
        render json: BookSerializer.new(book).serialized_json
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Book not found"}
    end

    def new
        book = Book.new()
    end 

    def create
        puts "PARAMS: #{params}"
        book = Book.new(book_params)
        puts "BOOK PARAMS: #{book_params}"
        puts "Book TITLE: #{book.title}"
        if book.save
           # render json: BookSerializer.new(book).serialized_json
            render json: {message: "success", id:book.id}, status: 200
        else
            render json: {error: book.errors.messages}, status: 422
        end
    end

    def update
        book = Book.find(params[:id])
        puts "Book Params:#{book_params}"
        if book.update(book_params)
            render json: BookSerializer.new(book).serialized_json
        else
            render json: {error: book.errors.messages}, status: 422
        end
    end

    def destroy
        book = Book.find(params[:id])
        if book.destroy
            render json: {message: "success"}
        else
            render json: {error: book.errors.messages}, status: 422
        end
    end

    private
    def book_params
        params.permit(:title, :author, :language, :description, :publisher, :totalBooks, :availableBooks, :image)
    end
end
