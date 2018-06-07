---
title: Why wont my react component update
date: "2018-05-24"
path: "/react16.3-component-update/"
---

I recently came across a mind bending problem after I updated to React 16.3.

`ComponentWillRecieveProps` did not trigger, but the `staticgetDerivedStateFromProps` triggered. 

I was shocked thinking I messed up upgrading and there was a bug with the releases. I went through numerous github issues and bug reports to no avail. 

After being flummoxed for 2 days, i declared officially I was out of ideas. In a discussion on a similar vein, we found out the parent component was actually unmounting this component when it received props and remounting it. After a `shouldComponentUpdate` fix, everything is fine with the new 16.3 land. 

> Also remember the spelling of `ComponentWillRecieveProps`