export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject("capitalize", function (value) {
    return value.replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
  });
};
