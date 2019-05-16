const numSpaces = (lines) =>
  lines.reduce((acc, cur) => {
    const  index = cur.search(/[^\s]/)
    return ( index > 0 && ( acc == 0  || index < acc ) ) ? index : acc
  }, 0)


function mTrim ( str ) { // parameter is for the exporting mtrim function.
  if ( Array.isArray(str) ) { str = str[0] } // for tagged template implementation.
  if ( ! str ) { str = this; } // for prototype implementation.
  if ( str ) {

    const lines = str.split( '\n' )
    const delSpacesNum = numSpaces(lines)

    return lines.map( (x, index) => (x.search(/[^\s]/) == -1) ? '' : (index > 0) ? x.substring(delSpacesNum) : x ).join('\n')
  }
}

String.prototype.mtrim = mTrim;
module.exports = String;
module.exports = { mtrim: mTrim };
