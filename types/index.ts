import React from "react"

export interface DataType {
  id: string
  title: string
  tags: Array<string>
  description: string
}

export interface PostDataType extends DataType {
  date: string
}

export interface WorkDataType extends DataType {
  image: string
}

export interface Post extends PostDataType {
  content: string
}

export interface Work extends WorkDataType {
  content: string
}

export interface FilterButtonInterface {
  label: string
  value: string
  isActive: boolean
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface FilterButtonsInterface {
  filters: FilterButtonInterface[]
  activeFilterValue: string
}