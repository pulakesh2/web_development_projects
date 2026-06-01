def solve(str_, num, open_, close):

    if open_ == close == num:
        print(str_)


    if open_ <= num:
        solve(str_ + '(', num, open_ + 1, close)
    if close < open_:
        solve(str_ + ')', num, open_, close + 1)

solve('', 3, 0, 0)