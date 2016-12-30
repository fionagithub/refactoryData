var person = [{ 'sex': 'man', 'age': 77, 'location': 'china' },
    { 'sex': 'woman', 'age': 33, 'location': 'amerian' },
    { 'sex': 'man', 'age': 11, 'location': 'china' },
    { 'sex': 'woman', 'age': 33, 'location': 'japan' },
    { 'sex': 'man', 'age': 55, 'location': 'china' },
    { 'sex': 'woman', 'age': 44, 'location': 'japan' },
    { 'sex': 'man', 'age': 33, 'location': 'japan' },
    { 'sex': 'man', 'age': 22, 'location': 'china' }];

var layera =['location','sex'];

refactory(person, layera);

function refactory(resource, layer) {
    var obj = {};
    var key = {};
    resource.forEach(function(v, i) {
        var l = v[layer[0]],
            s = v[layer[1]];
        if (!obj[l]) {
            obj[l] = {};
            obj[l][s] = [v];
        } else {
            if (!obj[l][s]) {
                obj[l][s] = [v];
            } else { obj[l][s].push(v) }
        }
    })
    console.log('---', obj)
}
