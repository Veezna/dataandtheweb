/** @module DataSource 
 * Exposes CRUD methods for working with a data source.
 */
module.exports = {
  create: create,
  read: read,
  update: update,
  destroy: destroy
}

/** @function create 
 * Creates the item in the data source
 * @param {object} item - the item to create. 
 * @param {create~callback} callback - the callback to invoke when done.
 */
function create(category, item, callback){
  throw("Not implemented error");
};

/** @callback create~callback 
 * Callback invoked by the dataSource.create() method.
 * @param {string|object} error - any error that occured, or a falsy value if none
 * @param {string} id - the identifier assigned to the item.
 */

/** @function read
 * Reads the item from the data source
 * @param {string} id - the identifier of the item to read. 
 * @param {create~callback} callback - the callback to invoke when done.
 */
function read(id, callback) {
  throw("Not implemented error");
}

/** @callback read~callback 
 * Callback invoked by the dataSource.create() method.
 * @param {string|object} error - any error that occured, or a falsy value if none
 * @param {object} item - the requested item
 */

/** @function update 
 * Updates the specified item in the data source
 * @param {string} id - the identifier of the item to update.
 * @param {object} updates - the updates to apply
 * @param {update~callback} callback - the callback to invoke when done 
 */
function update(id, updates, callback) {
  throw("Not implemented error");
}

/** @callback update~callback 
 * @param {string|object} error - any error that occured, or a falsy value if none
 * @param {object} item [optional] - the updated item.
 */

/** @function destroy 
 * Removes the specified item from the data source
 * @param {string} id - the identifier of the item to remove.
 * @param {update~callback} callback - the callback to invoke when done 
 */
function destroy(id, callback) {
  throw("Not implemented error");
}

/** @callback destroy~callback
 * @param {string|object} error - any error that occured, or a falsy value if none.
 * @param {object} item [optional] - the removed item 
 */
