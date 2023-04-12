<h1 align="center">Fake Useragent</h1>

This repository includes a Python and Javascript program to create fake useragents.

```Python
# Scripts
Fake_Useragent.py
Fake_Useragent.js
```

## Scripts

#### Fake Useragent (Python)

1. Load the JSON file with all the useragents.

```python
useragents = json.load(open('useragents.json', 'r'))
```

2. Use the imported 'random' module to randomly select a useragent with the corresponding 'software' and 'system'.

```python
useragentsList = []
for i in range(amount):
    useragentsList.append(random.choice(useragents[software][system]))

return useragentsList
```

#### Fake Useragent (Javascript)

1. Use fs.readFileSync() method to read the JSON file with all the useragents.

```lua
useragents = JSON.parse(fs.readFileSync(USERAGENTS_PATH,'utf8'));
```

2. Use Math.random() to randomly select a useragent with the corresponding 'software' and 'system'.

```lua
for (let i = 0; i < amount; i++) {
    useragentsList.push(useragents[software][system][Math.floor(Math.random() * useragents[software][system].length)]);
}

return useragentsList
```

## Credits

Everything is coded by Alex lo Storto

Licensed under the MIT License.
