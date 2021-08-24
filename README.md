# eslint-plugin-jsre

 ESLint plugin for EdgerOS **J**ava**S**cript **R**un**T**ime.

 This plugin provides environment `@edgeros/jsre/env` to define global variables inside JSRE.

## Usage

1. Install the package
```
npm install @edgeros/eslint-plugin-jsre --save-dev
```

2. Add `@edgeros/jsre` to the plugins section of your `.eslintrc`.  
   The `eslint-plugin-` prefix might be omitted below:
```json
{
    "plugins": [
        "@edgeros/eslint-plugin-jsre"
    ]
}
```

3. Add `@edgeros/jsre/env` to the `env` section of your `.eslintrc`.  
   The `eslint-plugin-` prefix **has to be omitted** below:
```json
{
    "env": {
        "@edgeros/jsre/env": true
    }
}
```
