CREATE TABLE ProductInfo (
    PartID INT PRIMARY_KEY,
    Quantity INT NOT NULL
);

CREATE TABLE WeightBrackets (
    WeightRange VARCHAR(30) PRIMARY_KEY,
    Price FLOAT(5,2) NOT NULL
);
