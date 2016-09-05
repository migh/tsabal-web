/**
 * ApiController
 *
 * @description :: Server-side logic for managing Apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  malledi: function (req, res) {
    return res.json({
      id: Malledit.test
    });
  }
};

