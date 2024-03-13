/**
 * 列类型
 */
export interface ColumnType {
  title: string
  key: string
}

/**
 * 表头Props类型
 */
export interface HeaderProps {
  columns: ColumnType[]
}

/**
 * 表格Props类型
 */
export interface TableProps {
  columns: ColumnType[]
  data: any[]
}
