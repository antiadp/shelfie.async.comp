UPDATE products 
SET name = $1, price= $2, img= $3 
WHERE shelfnum = $4 AND binnum=$5;
