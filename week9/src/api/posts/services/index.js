const { getConn } = require('../../../database/pool');

const postService = {
  selectList: async () => {
    let conn;
    let result;
    try {
      conn = await getConn();
      const [rows] = await conn.query('SELECT * FROM post');
      result = { success: true, list: rows };
    } catch (e) {
      console.error(e);
      result = e;
    } finally {
      if (conn) conn.release();
      return result;
    }
  },

  selectPost: async ({ id }) => {
    let conn;
    let result;
    try {
      conn = await getConn();
      const [rows] = await conn.query('SELECT * FROM post WHERE id = ?', [id]);
      result = { success: true, post: rows[0] };
    } catch (e) {
      console.error(e);
      result = e;
    } finally {
      if (conn) conn.release();
      return result;
    }
  },

  insertPost: async ({ title, content }) => {
    let conn;
    let result;
    try {
      conn = await getConn();
      await conn.execute('INSERT INTO post(title, content) VALUES(?,?)', [
        title,
        content,
      ]);
      result = { success: true };
    } catch (e) {
      console.error(e);
      result = e;
    } finally {
      if (conn) conn.release();
      return result;
    }
  },

  updatePost: async ({ title, content, id }) => {
    let conn;
    let result;
    try {
      conn = await getConn();
      await conn.execute('UPDATE post SET title=?, content=? WHERE id = ?', [
        title,
        content,
        id,
      ]);
      result = { success: true };
    } catch (e) {
      console.error(e);
      result = e;
    } finally {
      if (conn) conn.release();
      return result;
    }
  },

  deletePost: async ({ id }) => {
    let conn;
    let result;
    try {
      conn = await getConn();
      await conn.execute('DELETE FROM post WHERE id = ?', [id]);
      result = { success: true };
    } catch (e) {
      console.error(e);
      result = e;
    } finally {
      if (conn) conn.release();
      return result;
    }
  },

  liked: async ({ userId, postId }) => {
    let conn;
    let result;
    try {
      let isLiked = false;
      conn = await getConn();
      const [
        rows,
      ] = await conn.query(
        'SELECT * FROM post_like WHERE post_id = ? AND user_id = ?',
        [postId, userId],
      );
      if (rows.length == 0) {
        await conn.execute(
          'INSERT INTO post_like (post_id, user_id) VALUES (?,?)',
          [postId, userId],
        );
        isLiked = true;
      } else {
        await conn.execute(
          'DELETE FROM post_like WHERE post_id = ? AND user_id = ?',
          [postId, userId],
        );
        isLiked = false;
      }
      result = { success: true, isLiked };
    } catch (e) {
      console.error(e);
      result = e;
    } finally {
      if (conn) conn.release();
      return result;
    }
  },
};

module.exports = postService;
