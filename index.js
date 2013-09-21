
exports.overload = function() {
    var match = -1;
    var argstring = '';

    // First Usage Method (see README)
    if (typeof arguments[0] === 'object' && typeof arguments[1] === 'object' && typeof arguments[2] === 'object') { // TODO: better checks
        var args = arguments[0],
            sigs = arguments[1],
            funcs = arguments[2];

        // find a signature match
        for (var i=0; i<sigs.length; i++) {
            for (var j=0; j<args.length; j++) {
                if (typeof args[j] === typeof sigs[i][j]) {
                    if (j === args.length-1) { // found a matching signature
                        match = i;
                    }
                    continue;
                }
                else {
                    break;
                }
            }
        }

        // if a match is found, call the corresponding function
        //console.log(match);
        if (match >= 0) {
            for (var i=0; i<args.length; i++) {
                argstring += 'args['+i+']'+(i == args.length-1 ? '' : ', ');
            }
            //console.log('funcs[match]('+argstring+')');
            return eval('funcs[match]('+argstring+');');
        }
        else {
            console.log('A signature match was not found.');
            return false;
        }
    }
    // TODO: Second Usage Method (see README, needs to be implemented)
    else if ( typeof arguments[0] && typeof arguments[1] === 'object' && typeof arguments[2] === 'function') { // TODO: better checks
        var funcRef = arguments[0],
            sig = arguments[1],
            func = arguments[2];

        funcRef = function() {
            console.log('hoorah.');
        };
        funcRef.blah = function() {
            console.log('blah!!!!!');
        };

    }
    else {
        console.log('Invalid use of parametric.');
        return false;
    }
};
