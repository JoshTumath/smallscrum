'use strict';

/**
 * Seed the database with initial test data
 * @param {Fortune} store the store
 */
module.exports = function (store) {
  store.request({
    type: 'project',
    method: 'create',
    payload: [
      { name: 'Cardigan Bay Holiday Homes', slug: 'cardigan-bay-holiday-homes' },
      { name: 'Aberystwyth Garages', slug: 'aberystwyth-garages' },
      { name: 'NNP Letting Agency', slug: 'nnp' },
      { name: 'AUCU', slug: 'aberystwyth-cu' },
      { name: 'Borth College', slug: 'borth-college' }
    ]
  });
};
