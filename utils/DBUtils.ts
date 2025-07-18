import * as sql from "mssql";
import oracledb from "oracledb";
import CommonConstants from "../constants/CommonConstants";
import DBConstants from "../constants/DBConstants";
export default class DBUtil {
  /**
   * Executes the query on MSSQL database
   * @param dbConfig data base configuration
   * @param query to be executed
   * @returns record set
   */
  public static async executeMSSQLQuery(dbConfig: string, query: string) {
    try {
      const pool = await sql.connect(`${dbConfig}${DBConstants.CERTIFICATE}`);
      const result = await pool.request().query(query);
      return { rows: result.recordset, rowsAffected: result.rowsAffected };
    } catch (err) {
      throw new Error(`Error while executing query\n${err.message}`);
    }
  }}