
let deviceWidth;
/**
 * @return {number}
 */
const getDeviceWidth = ( ) => {
    if ( 'undefined' == typeof deviceWidth ) deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    return deviceWidth;
};

let deviceHeight;
/**
 * @return {number}
 */
const getDeviceHeight = ( ) => {
    if ( 'undefined' == typeof deviceHeight ) deviceHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    return deviceHeight;
};