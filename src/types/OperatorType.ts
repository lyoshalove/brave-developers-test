import React from "react";

export interface IOperator {
  id: number | string;
  name: string;
  image?: () => JSX.Element | string;
}