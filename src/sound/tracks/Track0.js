import Track from "../Track";

export default class Track0 extends Track {
  constructor(...args) {
    super(...args);

    this.pipe(this.output);
  }
}
