# traning-unit-test

### 1. Hãy nêu các bước viết unit test

- Identify all possible case
- Specify parameters and expected results for each case
- Write test Execute test
- Evaluation and assessment of results

### 2. Hãy nêu các thành phần cơ bản có trong 1 unit test

- Test suit
- Block test
- Test case
- Action
- Assert

### 3. Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không.

| No  | Input                | Output |
| --- | -------------------- | ------ |
| 1   | []                   | False  |
| 2   | [null]               | False  |
| 3   | [undefined]          | False  |
| 4   | [null, 3, 4]         | False  |
| 5   | [undefined, 3, 4]    | False  |
| 6   | ['3', null, 5]       | False  |
| 7   | ['3', undefined, 5]  | False  |
| 8   | ['1']                | False  |
| 9   | ['', 3, 4]           | False  |
| 10  | ['3', '4', '5']      | False  |
| 11  | [2,'3', '4', '5']    | False  |
| 12  | [1]                  | False  |
| 13  | [3, 3]               | False  |
| 14  | [3, 3, 4]            | False  |
| 15  | [3, 4, 4]            | False  |
| 16  | [2, 3, 3, 4]         | False  |
| 17  | [2, 3, 2]            | False  |
| 18  | [5, 4, 3]            | False  |
| 19  | [3, 4, 5]            | True   |
| 20  | [-1, 2, 3, 4, 5]     | True   |
| 21  | [-1, -2, -3, -4, -5] | False  |
| 21  | [-5, -4, -3]         | False  |
