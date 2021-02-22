const array = new Array(
    1,
    ['a','b','c'],
    new Date(), function() {console.log('cc');
});

array[3]();

array.forEach(
    (element) => {
        if (typeof(element) === 'function') {
            element();
        }
    }
);

