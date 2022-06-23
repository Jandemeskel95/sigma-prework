const minMax = (arr) =>
{
    let min = arr[0];
    let max = arr[0];
    let result = []

    for (var i=0; i<arr.length; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }

    result.push(min);
    result.push(max);

    console.log(result)
    return result
}

test1 = [2, 4, 1, 0, 2, -1];
test2 = [20, 50, 12, 6, 14, 8];
test3 = [100, -100]


minMax(test1);
minMax(test2);
minMax(test3);
