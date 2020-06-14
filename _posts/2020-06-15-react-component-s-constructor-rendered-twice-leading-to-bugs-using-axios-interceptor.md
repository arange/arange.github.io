---
layout: post
title: >-
  React - component's constructor rendered twice leading to bugs using
  Axios.interceptor
subtitle: Strict Mode
tags: [react,learn,bugfix]
---
```
React Vesion: 16.13.1
```

## Quick Solution
Simply turn off the strict mode by removing **<React.StrictMode>** in the **index.js** file should solve the problem.

## Cause
### Deprecated componentWillMount Method

The _componentWillMount_ method, along with _componentWillReceiveProps_ and _componentWillUpdate_, will be [removed from React 17.0](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#adding-event-listeners-or-subscriptions) as they are considered **UNSAFE** by the React team.

That being said, in the console it will now warn you when you're using these methods, see the warning message below:

	> Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

	* Move code with side effects to componentDidMount, and set initial state in the constructor.
	* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.
    
I want to get rid of such warning message thus I moved my code inside _componentWillMount_ to the _constructor_ method. This should not make any change to my program as both methods are called before the _render()_ method thus my **axios interceptors** are binded to the child component beforehand. However, it turns out that the _constructor_ method and _componentWillMount_ method have different behaviours under strict mode, which I finally realised after 30 minutes of debugging (sad story).

### Strict Mode

About Strict Mode: <https://reactjs.org/docs/strict-mode.html>

According to the doc,     

> StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

One thing **strict mode** does is that _**it will run the component render cycle twice**_ to check for potential bugs with your code. Normally, this should be fine, but if you wanna do something inside a _constructor_ method other than setting states, it might cause you a headache. However, my code runs smoothly with Strict Mode on while using _componentWillMount_ because it will only be called once as the component is essentially only mounted once.

## Conclusion

According to the React Docs, _componentWillMount_ is considered unsafe, therefore we should try not to use the method, nor the **UNSAFE_** version, as doing so will reduce the chance of creating potential bugs. However, be careful about the strict mode when migrating from _componentWillMount_ to _constructor_, because the _constructor_ method will be called twice.




