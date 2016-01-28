redux-training
==============
This a playground repo that I did based on [this amazing course](https://egghead.io/series/getting-started-with-redux) trying to understand better and gain more expertise working with [redux](https://github.com/rackt/redux).

## Tech stack
- [webpack](https://webpack.github.io/)
- [babel](https://github.com/babel/babel-loader)
- [react](http://facebook.github.io/react/)
- [redux](https://github.com/rackt/redux/)
- [react-router](https://github.com/rackt/react-router)

## Development
To start hacking into this app, first run `npm install` to grab all the dependencies. Then start the dev server with `npm run dev`.

When you start the `dev` environment, you will see the [Redux DevTools](https://github.com/gaearon/redux-devtools) stacked in your app. You can hide it with `control+h` or change its position with `control+q`.

## Testing
You can test the app by running `npm test` - that will lint your `sass` and `js` files and then run the tests. If you want to run your tests continuosly, then run `npm run ci`.

## Building for production
To create a distribution build of the application, run `npm run build` to package all the output to the `build` folder. If you want to preview your build you can run `npm run prod` and it will start a [http-server](https://www.npmjs.com/package/http-server) on the `build` folder.

## Deployment
*\* With the purpose of enhancing other skills, I am working on this repo using the [git flow](https://github.com/nvie/gitflow) convention. Deploying to diferent [firebase hosting](https://www.firebase.com/docs/hosting/) instances via [codeship](http://codeship.io).*

### Production URL
https://redux-training-prod.firebaseapp.com/

### Staging URL
https://redux-training-dev.firebaseapp.com/
