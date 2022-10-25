import Modifier from 'ember-modifier';
import { isPresent, isNone } from '@ember/utils';

import Mark from 'mark.js';

export default class MarkModifier extends Modifier {
  /// Instance of the Mark object.
  instance = null;

  didReceiveArguments() {
    const [keyword] = this.args.positional;

    if (isNone(this.instance)) {
      this.instance = new Mark(this.element);
    }

    // We always unmark the current marking.
    this.instance.unmark();

    if (isPresent(keyword)) {
      this.instance.mark(keyword);
    }
  }

  willRemove() {
    if (isPresent(this.instance)) {
      this.instance.unmark();
    }
  }
}
