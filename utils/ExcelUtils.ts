import excelToJson from "convert-excel-to-json";
import ExcelConstants from "../constants/ExcelConstants";

export default class ExcelUtil {
    public static getTestDataArray(sheet: string) {
        const result = excelToJson({
            sourceFile: ExcelConstants.TEST_PATH,
            columnToKey: {
                '*': '{{columnHeader}}',
            },
            sheetStubs: true,
            header: { rows: 1 },
            sheets: [sheet],
        });
        return result[sheet];
    }