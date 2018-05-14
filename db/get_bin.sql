SELECT * 
FROM products 
WHERE shelfnum = ${shelf} AND binnum = ${bin}
ORDER BY binnum ASC;