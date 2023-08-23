def countNumber(myArray,target) :
    count = myArray.count(target)
    return count

myArray = [2,2,2,4,4,6,8,8,8,8,8,10]
target = 8
repeat = countNumber(myArray,target)
print(f"Hedef sayı {repeat} kere tekrar ediyor.")