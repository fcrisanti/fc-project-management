package pl.fc.app.xlsxparser;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import pl.fc.app.enities.CostDTO;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

public class XLSXReader {
    public static List<CostDTO> readXlsx(String path) {

        Set<String> columnNames = new HashSet<>();
        columnNames.add("Odbiorca FV");
        columnNames.add("Nazwa projektu");
        columnNames.add("Nr projektu");
        columnNames.add("Numer faktury");
        columnNames.add("Sprzedawca");
        columnNames.add("Data sprzedaży");
        columnNames.add("Data wystawienia");
        columnNames.add("Przedmiot usługi");
        columnNames.add("Kategoria kosztu");
        columnNames.add("Podkategoria kosztu");
        columnNames.add("Opex/Capex");
        columnNames.add("Wykonanie budżetu brutto");
        columnNames.add("Data akceptacji kosztu");
        columnNames.add("Kierownik merytoryczny/osoba zlecająca");
        columnNames.add("Refaktura z VIG spółka");
        columnNames.add("MPK");
        columnNames.add("Nazwa biura");
        columnNames.add("GMPK");
        columnNames.add("NR zlecenia");

        Map<Integer, String> columnNamesAndIndex = new HashMap<>();

        List<Map<String, String>> columnNamesAndValuesList = new ArrayList<>();
        List<CostDTO> costDTOS = new ArrayList<>();
        DataFormatter formatter = new DataFormatter(new Locale("pl"));
        SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");

        try {
            File file = new File(path);   //creating a new file instance
            FileInputStream fis = new FileInputStream(file);   //obtaining bytes from the file
            //creating Workbook instance that refers to .xlsx file
            XSSFWorkbook wb = new XSSFWorkbook(fis);
            XSSFSheet sheet = wb.getSheetAt(0);     //creating a Sheet object to retrieve object
            Iterator<Row> itr = sheet.iterator();    //iterating over excel file
            Row getNames = sheet.getRow(1);

            for (Cell cell : getNames) {
                for (String name : columnNames) {
                    if (name.equals(cell.getStringCellValue())) {
                        columnNamesAndIndex.put(cell.getColumnIndex(), cell.getStringCellValue());
                    }
                }
            }

            itr.next();
            itr.next(); //skip two first rows

            while (itr.hasNext()) {

                Map<String, String> columnNamesAndValues = new HashMap<>();

                Row row = itr.next();
                Iterator<Cell> cellIterator = row.cellIterator();   //iterating over each column
                while (cellIterator.hasNext()) {
                    Cell cell = cellIterator.next();

                    switch (cell.getCellType()) {
                        case NUMERIC:
                            if (DateUtil.isCellDateFormatted(cell)) {
                                columnNamesAndValues.put(columnNamesAndIndex.get(cell.getColumnIndex()), dateFormatter.format(cell.getDateCellValue()));
                            } else {
                                columnNamesAndValues.put(columnNamesAndIndex.get(cell.getColumnIndex()), formatter.formatCellValue(cell));
                            }
                            break;
                        case STRING:
                            columnNamesAndValues.put(columnNamesAndIndex.get(cell.getColumnIndex()), formatter.formatCellValue(cell));
                            break;
                    }
                }
                    columnNamesAndValuesList.add(columnNamesAndValues);

                }
            } catch(Exception e){
                e.printStackTrace();
            }

            for (Map<String, String> columnNamesAndValuesMap : columnNamesAndValuesList) {
                CostDTO costDTO = CostDTO.builder()
                        .grossAmount((columnNamesAndValuesMap.get("Wykonanie budżetu brutto") == null ? null : (columnNamesAndValuesMap.get("Wykonanie budżetu brutto").replaceAll("\\u00a0", "").replaceAll(",", "."))))
                        .companies(columnNamesAndValuesMap.get("Odbiorca FV"))
                        .costCategory(columnNamesAndValuesMap.get("Podkategoria kosztu"))
                        .nazwaBiura(columnNamesAndValuesMap.get("Nazwa biura"))
                        .invoiceNumber(columnNamesAndValuesMap.get("Numer faktury"))
                        .invoiceDate(columnNamesAndValuesMap.get("Data wystawienia"))
                        .isIT(columnNamesAndValuesMap.get("Kategoria kosztu"))
                        .MPK(columnNamesAndValuesMap.get("MPK"))
                        .nrZlecenia(columnNamesAndValuesMap.get("NR zlecenia"))
                        .provider(columnNamesAndValuesMap.get("Sprzedawca"))
                        .title(columnNamesAndValuesMap.get("Przedmiot usługi"))
                        .type((columnNamesAndValuesMap.get("Opex/Capex") == null ? null : (columnNamesAndValuesMap.get("Opex/Capex").replaceAll("\\u00a0", "").toUpperCase())))
                        .build();
                costDTOS.add(costDTO);
//                System.out.println(costDTO);
            }
            return costDTOS;
        }
    }
