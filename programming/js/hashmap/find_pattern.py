def solve(A,B):
    hm_pattern = {}
    for i in range(len(B)):
        if B[i] in hm_pattern:
            hm_pattern[B[i]] += 1
        else:
            hm_pattern[B[i]] = 1

    hm_str = {}
    l = 0
    r = 1
    ans = 100000000000

    while r < len(A):
        # if all pattern element of hm_pattern present in hm_str:
        if is_valid(A,B):
            ans = min(ans, len(hm_str))
            hm_str[A[l]] -= 1
            l += 1
        else:
            if A[i] in hm_str:
                hm_str[A[i]] += 1
            else:
                hm_str[A[i]] = 1
            r += 1

    return ans

def is_valid(hm_str, hm_pattern):
    for ch in hm_pattern:
        if ch not in hm_str or hm_str[ch] < hm_pattern[ch]:
            return False
    return True

str_var = 'adobecodebanc'

pattern = 'abc'

print(solve(str_var,pattern))