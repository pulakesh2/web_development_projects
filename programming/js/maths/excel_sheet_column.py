def excel_sheet_column(num):
    result = []
    while num > 0:
        rem = num % 26
        num = num // 26

        if rem == 0:
            rem = 26
            num = num - 1

        ch = chr(rem - 1 + ord('A'))

        result.insert(0, ch)

    return ''.join(result)

print(excel_sheet_column(50))