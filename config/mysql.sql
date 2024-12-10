CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('Librarian', 'User') NOT NULL
);

CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE BorrowRequests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    book_id INT,
    start_date DATE,
    end_date DATE,
    status ENUM('Pending', 'Approved', 'Denied'),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (book_id) REFERENCES Books(id)
);

CREATE TABLE BorrowHistory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    book_id INT,
    borrowed_on DATE,
    returned_on DATE,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (book_id) REFERENCES Books(id)
);
