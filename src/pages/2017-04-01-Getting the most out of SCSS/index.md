# Getting The Most Out Of SCSS

### What is LibSass, Ruby Sass and Node Sass?

I was a bit confused with so many sass versions. Here is the gist: 

Sass was primarily written in ruby language as a gem. Ruby Sass, the original one, works perfectly in a ruby environment. LibSass is the C/C++ converted library of Ruby Sass which removes ruby dependency. Node Sass is the javascript implementation of the LibSass library, there are other implemntations of the library as well. [More details...](http://sassbreak.com/ruby-sass-libsass-differences/)

#### Installing node-sass in javascript

Use either `npm` or `yarn` to download node-sass and `-D` it.
1. `npm init` to create package.json, if already there then skip this.
2. `yarn add node-sass -D` This adds node-sass dependency to `package.json`
3. `"styles": node-sass -o css scss` Add this to the scripts section,  node-sass will output to the css folder by reading the scss folder contents.

P.S: Add semicolons where needed in scss files , sometimes you get errors if missing.

#### Partials

SCSS partials files start with `_` and can be imported using `@import "partial-file"` without the _ and file extension inside other SCSS files. Also order matters while carrying over variables between files. 

If partials name does not start with _ , then same files are copied over to the css by node-sass instead of a  single master css file.

#### Parent and nesting

Nesting in CSS is awesome and it helps keep code DRY. Use `&` to refer to parent class and also use it a name extension.
```
.fruits{
  &-tree{
    height: 100%;
  }
  &::before{
    display:inline;
  }
  .apple{
    border-radius: 25px;
  }
} 

```
&-tree on node-sass creates fruits-tree, nested apple className refers to apple class inside the fruits element, also pseudo selectors before and after refer to the direct parent element.

#### Variables

Variables are awesome, helps changing values a breeze. They can not only hold style values, they can also be interpolated. Variables can also be overwritten and are block scoped.
```
$apple-color: red;
$garden-name: its-the-eden

.apple{
  color: $apple-color;
}
.garden{
  content: "#{$garden-name}"
}
#{$garden-name}-area{
  display: block;
}
```
Have a single file to have all variables and import at top for easier maintenance.

#### Built-in functions
SASS provides a lot of inbuilt functions for looping, mapping, lists, strings etc. Few of the color functions
- lighten and darken (color, number%) modifies the color by given % and gives hex code
- complement (color) gives the 90 deg opposite of the given color
- mix (1,2) mixes 2 colors
- transparentize (color, amout) makes color (1-amount) opacity
[lot more..](http://sass-lang.com/documentation/Sass/Script/Functions.html)

#### @mixin
