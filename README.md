# Generate SASS partials in an organized directory structure.

### Jumpstart SASS-powered projects with this useful set of SASS partials piped into a single file style.scss with the import directive.

To get started:
```sh 
git clone https://github.com/Usarneme/sass_boilerplate_generator.git
cd sass_boilerplate_generator
```

Copy and configure the files as you need them, or compile them into a single file with:
```sh 
sass style.scss:style.css
```

#### Includes:

* Utilities
```
'utilities/variables'
'utilities/mixins'
'utilities/functions'
'utilities/helpers'
```
* Base Styles
```
'base/reset'
'base/base'
```

* Component Styles
```
'components/buttons'
'components/icons'
'components/images'
```

* Layout Styles
```
'layout/containers'
'layout/header'
'layout/footer'
```

With great utility such as adjustable variables to suit your needs:
```
// Breakpoints
$break-xs: 480px;
$break-s: 768px;
$break-m: 960px; 
$break-l: 1440px;
$break-xl: 1920px;
```

And powerful mixins such as media queries:
```

// Media Queries
@mixin mq($break) {
  @if $break == 'xs' {
    @media (max-width: $break-s) {
      @content;
    }
  }
  @if $break == 's' {
    @media (min-width: $break-s) {
      @content;
    }
  }
  @else if $break == 'm' {
    @media (min-width: $break-m) {
      @content;
    }    
  }
  @else if $break == 'l' {
    @media (min-width: $break-l) {
      @content;
    }    
  }
  @else if $break == 'xl' {
    @media (min-width: $break-xl) {
      @content;
    }    
  }
}
```

And a vendor prefix powered flexbox mixin with optional parameters:
```
// Flex container
@mixin flexy($disp: flex, $dir: null, $wrap: null, $justify: null, $width: null) {
  @include flexbox();
  @include flex-direction($dir);
  @include flex-wrap($wrap);
  @include justify-content($justify);
  @include flex-basis($width);
}
```
