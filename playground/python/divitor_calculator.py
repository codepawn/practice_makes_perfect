def cal(arg1, arg2):
    if arg1 <= 0:
        if arg2 & 2 ==0:
            return arg1 ** arg2
        else:
            return "- {:d}".format(arg1 ** arg2)
    else:
        return arg1 ** arg2

print cal(107, 1)

print 2^2
