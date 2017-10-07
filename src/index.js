/* eslint no-invalid-this: off */
/* eslint consistent-this: off */

'use strict';

/**
 * provides a method for destoying a net.Server
 *
 * @param {Function} callback
 *
 * @returns {undefined}
 */
function destroy( callback ) {
  /**
   * @property {Object} sockets
   */
  var Server = this;

  if ( Server.debug ) {
    console.log( '[info]', new Date(), 'net.Server destroy' );
  }

  if ( typeof Server.sockets === 'object' ) {
    Object.keys( Server.sockets ).map(
      /**
       * @param {string} key
       *
       * @returns {string}
       */
      function ( key ) {
        if ( !Server.sockets[ key ].destroyed ) {
          if ( Server.debug ) {
            console.log( '[info]', new Date(), 'net.Server destroyed socket', key );
          }

          Server.sockets[ key ].destroy();
        }

        return key;
      }
    );
  }

  Server.close( callback );
}

module.exports = destroy;
