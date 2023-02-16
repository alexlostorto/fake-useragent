# Syntax: <product> / <product-version> <comment>
# Browser syntax: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
# Example: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0

import json
import random

# Load JSON file with useragents
useragents = json.load(open('useragents.json', 'r'))


def create(amount=1, software="chrome", system="windows10"):
    if str(amount).isdigit():
        amount = int(amount)
    else:
        raise Exception("Amount has to be a number")

    if software not in useragents.keys():
        software = "chrome"

    if system not in useragents[software].keys():
        system = "windows10"

    useragentsList = []
    for i in range(amount):
        useragentsList.append(random.choice(useragents[software][system]))

    return useragentsList


if __name__ == '__main__':
    print(create(100))
