from random import choice

if __name__ == '__main__':
    print('WHAT DID YOU EAT')
    print('1: MCSPICY')
    print('2: BIG MAC')
    print('3: FILLET-O-FISH')
    option = input('> ')
    try:
        option = int(option)
    except ValueError:
        print('wtf')
        exit()

    if option < 1 or option > 3:
        print('wtf')
        exit()

    calories = {1: 10000, 2: 1000, 3: 2500}[option]
    # (name, calories burnt)
    exercises = [('run', 250), ('walk', 100), ('pushup', 50)]

    output = {'run': 0, 'walk': 0, 'pushup': 0}
    while True:
        x = random.choice(exercises)
        if x[1] > calories:
            break
        calories -= x[1]
        output[x[0]] += 1

    for k, v in output.items():
        print(f'{k} {v} times')