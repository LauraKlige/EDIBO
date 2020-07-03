## MD Bitwise operation
- Bitwise operation operates on one or more bit patterns or binary numerals at the level of their individual bits.
- Directly supported by the processor
- Used to manipulate values for comparisons and calculations

They have many applications - Cryptography, computer graphics, hash functions, compression algorithms, and network protocols
are just some examples where bitwise operations are extremely useful.

# Bitwise operators

A bitwise operator is an operator used to perform bitwise operations on bit patterns or binary numerals that involve the manipulation of individual bits.
Bitwise operations performed on bit flags, which can enable an instance of enumeration type to store any combination of values defined in an enumerator list

![image](https://miro.medium.com/max/540/1*lwKj-TpvToBxuq98LXII1A.png)  
https://miro.medium.com/max/540/1*lwKj-TpvToBxuq98LXII1A.png

### Bitwise AND
The bitwise AND operator (&) compares each bit of the first operand to the corresponding bit of the second operand. 
If both bits are 1, the corresponding result bit is set to 1. 
Otherwise, the corresponding result bit is set to 0. Both operands to the bitwise AND operator must be of integral types.
![image](https://miro.medium.com/max/2000/1*errHQXOg0kY6XUVWmGZXLA.png)

### Bitwise OR 
is a binary operation that takes two bit patterns of equal length and performs the logical inclusive OR operation on each pair of corresponding bits. 
The result in each position is 0 if both bits are 0, while otherwise the result is 1.
 
### Bitwise XOR 

A bitwise XOR is a binary operation that takes two bit patterns of equal length and performs the logical exclusive OR operation on each pair of corresponding bits. 
The result in each position is 1 if only one of the bits is 1, but will be 0 if both are 0 or both are 1.
![image](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrQ9bqcjHkDkQcZI-Bwl8kYV-Y-TgOKdCn8Q&usqp=CAU)  

### Bitwise NOT 
The bitwise NOT, or complement, is a unary operation that performs logical negation on each bit, forming the ones' complement of the given binary value. 
Bits that are 0 become 1, and those that are 1 become 0.
![image](https://docs.swift.org/swift-book/_images/bitwiseNOT_2x.png)

### Bitwise left shift 
When shifting left, the most-significant bit is lost, and a 00 bit is inserted on the other end.

The left shift operator is usually written as "<<".
#####  0010 << 1  →  0100  
#####  0010 << 2  →  1000
A single left shift multiplies a binary number by 2:
#####  0010 << 1  →  0100  

#####  0010 is 2
#####  0100 is 4

### Bitwise right shift 
When shifting right with a logical right shift, the least-significant bit is lost and a 00 is inserted on the other end.
#####  1011 >>> 1  →  0101  
#####  1011 >>> 3  →  0001
For positive numbers, a single logical right shift divides a number by 2, throwing out any remainders.
#####  0101 >>> 1  →  0010

##### 0101 is 5
##### 0010 is 2

### Arithmetic Right Shifts
When shifting right with an arithmetic right shift, the least-significant bit is lost and the most-significant bit is copied.
Languages handle arithmetic and logical right shifting in different ways. 
Java provides two right shift operators: >> does an arithmetic right shift and >>> does a logical right shift.
#####   1011 >> 1  →  1101
#####   1011 >> 3  →  1111
#####   0011 >> 1  →  0001
#####   0011 >> 2  →  0000

(The first two numbers had a 11 as the most significant bit, so more 11's were inserted during the shift. 
The last two numbers had a 00 as the most significant bit, so the shift inserted more 00's.)
If a number is encoded using two's complement, then an arithmetic right shift preserves the number's sign, 
while a logical right shift makes the number positive.
