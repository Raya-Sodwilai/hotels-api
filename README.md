# (Movie Reviews)

#### (This application will allow users to look up for movies' reviews)

#### By (Raya Sodwilai)

## Technologies Used

* _JavaScript_
* _CSS_
* _HTML_

## Setup/Installation Requirements

* _Users will use a webpack plugin called dotenv-webpack to make their environmental variables available inside their application_

```bash
npm install dotenv-webpack@2.0.0 --save-dev
```

* _Since it's a plugin, users need to first require it and then add it to the plugins array in webpack.config.js:_


```bash...
...
const Dotenv = require('dotenv-webpack');

module.exports = {
  ...
  plugins: [
    ...
    new Dotenv()
  ],
  ...
  }
};
```

* _In order to access environmental variables in your application, users will need to preface the environmental variable with process.env. Here's an example using API_KEY from:_

```bash
process.env.API_KEY
```

## Known Bugs

* _N/A_

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact Information

sodwilai@pdx.edu
