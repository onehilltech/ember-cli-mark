ember-cli-mark
==============================================================================

A simple EmberJS add-on for [Mark.js](https://markjs.io/)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-mark
```


Usage
------------------------------------------------------------------------------

### Simple Usage

Just add the `{{mark this.value}}` helper to any HTML element to highlight
words in real-time.

```handlebars
<div {{mark this.value}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce
        ut placerat orci. Adipiscing enim eu turpis egestas pretium aenean pharetra. Est
        placerat in egestas erat imperdiet. Tempus urna et pharetra pharetra massa massa
        ultricies mi quis. Faucibus interdum posuere lorem ipsum dolor. Consectetur adipiscing
        elit duis tristique sollicitudin nibh sit amet commodo. Porttitor massa id neque aliquam
        vestibulum morbi blandit cursus. Massa enim nec dui nunc mattis enim ut. Nunc congue nisi
        vitae suscipit tellus. Nunc non blandit massa enim nec dui nunc mattis enim. Amet commodo
        nulla facilisi nullam vehicula ipsum a arcu cursus. Ultrices neque ornare aenean euismod
        elementum. Posuere urna nec tincidunt praesent semper feugiat. Cursus euismod quis viverra
        nibh cras pulvinar mattis. Ultrices neque ornare aenean euismod elementum. Tempor nec feugiat
        nisl pretium fusce id velit ut. Proin libero nunc consequat interdum. Enim eu turpis egestas
        pretium aenean pharetra magna ac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam
        ultrices sagittis.</p>
</div>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [Apache 2.0](LICENSE.md).
