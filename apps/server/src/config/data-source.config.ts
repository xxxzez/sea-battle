import { DataSource } from "typeorm";
import { dataSourceOptions } from "./data-source-options.config";

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
